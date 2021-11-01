export const DAY_EVENT_DETAIL = [
  {
    key: 'from',
    type: 'datetime',
    templateOptions: {
      label: 'Začátek',
      placeholder: 'Vložte čas',
      displayFormat: 'HH:mm',
      required: true,
      disabled: true,
    }
  },
  {
    key: 'to',
    type: 'datetime',
    templateOptions: {
      label: 'Konec',
      placeholder: 'Vložte čas',
      displayFormat: 'HH:mm',
      disabled: true,
    }
  },
  {
    key: 'peoples',
    type: 'select',
    templateOptions: {
      label: 'Pracovníci',
      required: true,
      multiple: true,
      disabled: true,
      options: [
        { value: 'karel', label: 'Karel' },
        { value: 'tonda', label: 'Tonda' },
        { value: 'alfons', label: 'Alfons' },
        { value: 'tadit', label: 'Tadit' },
      ],
    },
  },
  {
    key: 'workTypes',
    type: 'select',
    templateOptions: {
      label: 'Typ práce',
      multiple: true,
      required: true,
      disabled: true,
      options: [
        { value: 'zdeni', label: 'Zdění' },
        { value: 'omitani', label: 'Omítání' },
        { value: 'obklady', label: 'Obklady' },
        { value: 'uklid', label: 'Úklid' },
      ],
    },
  },
  {
    key: 'note',
    type: 'textarea',
    templateOptions: {
      label: 'Poznámka',
      placeholder: 'Vložte poznámku',
      multiple: true,
      disabled: true,
    }
  }
];
