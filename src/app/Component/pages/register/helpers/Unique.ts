import { FormGroup } from '@angular/forms';

export function Unique(uniqmail: string, userdata: any) {
  return (formGroup: FormGroup) => {
    const mail = formGroup.controls[uniqmail];

    const index = userdata.findIndex(
      (item: { email: any }) => item.email === mail.value
    );

    if (mail.errors && !mail.errors['uniqueEmail']) {
      return;
    }

    if (index !== -1) {
      mail.setErrors({ uniqueMail: true });
    } else {
      mail.setErrors(null);
    }
  };
}
