export type InquiryServiceId =
'domestic' |
'international' |
'umrah' |
'hajj' |
'visaGulf' |
'visaEurope' |
'other';

export type TripTab = 'domestic' | 'international' | 'umrah';
export type IntlTab = 'gulf' | 'europe';

export type InquiryPrefill = {
  service?: InquiryServiceId | '';
  destination?: string;
  date?: string;
};