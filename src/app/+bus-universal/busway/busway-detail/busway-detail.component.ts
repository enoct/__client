/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/19/19 8:55 PM
 */

import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '~/@enoct/framework/core';
import { UniqueId } from '~/@enoct/framework/ngrx';
import { getOrNil } from '~/@enoct/shared';
import { Busway, initialBusway } from '~/app/store';

@Component({
  selector       : 'app-busway-detail',
  templateUrl    : './busway-detail.component.html',
  styleUrls      : ['./busway-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuswayDetailComponent extends BaseComponent implements OnInit {
  @ViewChild('delete') deleteRef: ElementRef;
  @ViewChild('submit') submitRef: ElementRef;
  @Input() busway: Busway;
  @Output() readonly deleteClick: EventEmitter<UniqueId> = new EventEmitter();
  @Output() readonly saveClick: EventEmitter<Busway>     = new EventEmitter();

  buswayForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    const resource = getOrNil(initialBusway)(this.busway);

    if (!resource._id) {
      (this.deleteRef as any).disabled = true;
    }

    this.buswayForm = this.formBuilder.group({
      _id     : resource._id,
      iataCode: [
        resource.iataCode,
        {
          validators: [Validators.required, Validators.maxLength(8)],
          updateOn  : 'blur'
        }
      ],
      name    : [
        resource.name,
        {
          validators: [Validators.required, Validators.maxLength(255)],
          updateOn  : 'blur'
        }
      ]
    });
  }

  onDelete(callback: EventEmitter<UniqueId>): void {
    callback.emit(this.buswayForm.get('_id').value);
  }

  onSave(callback: EventEmitter<Busway>): void {
    const resource = {
      _id     : this.buswayForm.get('_id').value,
      iataCode: this.buswayForm.get('iataCode').value,
      name    : this.buswayForm.get('name').value
    };

    callback.emit(resource);
  }
}
