export const USER_ADD = [
  {
    key: 'firstName',
    type: 'input',
    templateOptions: {
      label: 'Jméno',
      placeholder: 'Vložte jméno',
      required: true,
    },
    expressionProperties: {
      'templateOptions.disabled': 'model.text',
    },
  },
  {
    key: 'lastName',
    type: 'input',
    templateOptions: {
      label: 'Příjmení',
      placeholder: 'Vložte jméno',
      required: true,
    }
  },
  {
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email',
      type: 'email',
      placeholder: 'Vložte email',
      required: true,
      readonly: false,
    }
  },
  {
    key: 'projects',
    type: 'checkbox-list',
    templateOptions: {
      label: 'Projects',
      options: [],
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      label: 'Heslo',
      type: 'password',
      placeholder: 'Vložte heslo',
      required: false,
      disabled: false,
    }
  },
  {
    key: 'passwordConfirm',
    type: 'input',
    templateOptions: {
      label: 'Potvrzení hesla',
      type: 'password',
      placeholder: 'Opakujte heslo',
      required: false,
      disabled: false,
    }
  }
];
