import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  private block$: Observable<any>
  public block: any = undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public apiService: ApiService
  ) { }

  ngOnInit() {
    this.block$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getBlock(params.get('id')))
    );

    this.block$.subscribe((response) => {
      console.log(response)
      this.block = response;
    })
  }

}
