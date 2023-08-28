import { Component } from "@angular/core";
import { AuthService } from "src/app/core/auth.service";
import { LoadingService } from "src/app/core/loading.service";

@Component({
    selector: 'app-problem',
    templateUrl: './problem-id.component.html'
})
export class ProblemIdComponent {
    constructor(private readonly loadingService: LoadingService) {}

    isLoading$ = this.loadingService.visible.asObservable()
}