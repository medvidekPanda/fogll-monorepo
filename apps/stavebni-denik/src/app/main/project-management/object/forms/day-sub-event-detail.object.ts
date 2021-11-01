export const DAY_SUB_EVENT_DETAIL = [
  {
    key: 'title',
    type: 'input',
    templateOptions: {
      label: 'Název',
      required: true,
    },
  },
  {
    key: 'author',
    type: 'select',
    templateOptions: {
      label: 'Pracovník',
      required: true,
      multiple: false,
      disabled: false,
      options: [],
    },
  },
  {
    key: 'coAuthors',
    type: 'select',
    templateOptions: {
      label: 'Spolupracující',
      required: false,
      multiple: true,
      disabled: false,
      options: [],
    },
  },
  {
    key: 'description',
    type: 'textarea',
    templateOptions: {
      required: true,
      label: 'Popis práce',
      grow: true,
    },
  }
];
