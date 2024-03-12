import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError((error:HttpErrorResponse)=>{

    console.log("Error Code: "+error+" Error Message: "+error.message);
    return throwError(error);
  }))
};