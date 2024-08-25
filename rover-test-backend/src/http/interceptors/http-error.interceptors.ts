import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from "@nestjs/common";
import { catchError, Observable, throwError } from "rxjs";
import { errorToHttpException } from "../utils/error-converter";

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError((err) => {
          const httpError = err instanceof HttpException ? err : errorToHttpException(err);

          if (httpError.getStatus() >= HttpStatus.INTERNAL_SERVER_ERROR) {
            console.error(err, httpError);
          } else {
            console.warn(err, httpError);
          }
          return throwError(() => httpError);
        }),
      );
  }
}