import { Component, Input} from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private AccountService: AccountService) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});

    this.AccountService.updateStatus(this.id, status)
    // console.log('A server status changed, new status: ' + status);
    this.AccountService.statusUpdated.emit(status);
  }
}
