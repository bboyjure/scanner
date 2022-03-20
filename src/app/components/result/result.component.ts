import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  public code: string | null;
  public results: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restService: RestService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('id');
    if(!this.code) this.navigateHome();
    else{
      this.restService.getCodeResults(this.code).subscribe({
        next: result => {
          this.results = result;
        },
        error: err => {
          console.error(err)
          this.messageService.add({severity:'error', summary: err.error.errorMsg, });
          this.navigateHome()
        }
      })
    }
  }

  navigateHome(): void {
    this.router.navigateByUrl(`/home`);
  }
}
