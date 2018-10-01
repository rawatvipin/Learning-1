<form #tf="ngForm">
  Form Value: {{tf.value | json}}
  <br>
  <div class="form-group">
    Name: 
    <input type="text" name="name" required ngModel #fName="ngModel" [ngClass]="{'is-invalid':fName.invalid}">
  </div>
  <br> Mobile No.:
  <input type="text" name="mobileno" required ngModel>
  <br>
  <legend>Address
  </legend>
  <div ngModelGroup="address">
    State:
    <input type="text" name="state" ngModel required>
    <br> Pincode:
    <input type="text" name="pincode" ngModel>
  </div>
  <input type="button" [disabled]="!tf.form.valid" value="Submit">
</form>   
