```html
<div class="container">
    <div class="card mx-auto col-xl-6 col-lg-8 col-sm-10">
      <div class="card-body">
        <h5 class="card-title">@firebaseui/ng-bootstrap</h5>
        <ngb-auth-firebaseui (onSuccess)="printUser($event)"
                             (onError)="printError($event)">
        </ngb-auth-firebaseui>
      </div>
    </div>
  </div>
```
