export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Board: undefined;
  AddColumn: undefined;
  Column: {columnId: number};
  ColumnSettings: {columnId: number; title?: string; description?: string};
  Prayers: {columnId: number};
  PrayerDetails: {prayerId: number};
  SubscribedPrayers: {columnId: number};
};
