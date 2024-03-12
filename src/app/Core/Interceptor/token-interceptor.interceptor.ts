import { HttpInterceptorFn } from '@angular/common/http';


export const tokenHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('token');
  let header = req.headers;
  if (token) {
    header = header.set('Authorization', 'Bearer ' + token);
  }
  header = header.set('Content-Type', 'application/json');
  req = req.clone({ headers: header });
  console.log(req.headers);
  return next(req);
};