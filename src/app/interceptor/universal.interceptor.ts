import { Inject, Injectable, Injector, Optional, PLATFORM_ID } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { StateService } from '../service/state.service';

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

    constructor(@Optional() @Inject('serverUrl') protected serverUrl: string, private transferState: TransferState,
        @Inject(PLATFORM_ID) private platformId: Object) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (isPlatformServer(this.platformId)) {
            const serverReq = !this.serverUrl ? req : req.clone({
                url: `${this.serverUrl}${req.url}`
            });
            console.log("serverurl",this.serverUrl);
            return next.handle(serverReq).pipe(
                tap(
                    (event: any) => {
                        if (event?.body?.length) {
                            this.transferState.set(makeStateKey("cardList"), event.body);
                        }
                    },
                    err => {
                        console.log("interceptor error", err);
                    }
                )
            )
        }
    }
}
