import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  private tx$: Observable<any>
  public tx: any = undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    this.tx$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getTx(params.get('id')))
    );

    this.tx$.subscribe((response) => {
      console.log(response)
      this.tx = response;
    })
  }

}
