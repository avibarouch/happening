export interface Product {
  id: number;
  name: string;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'תחנה 1',
    description: 'נקודת כניסה ומידע'
  },
  {
    id: 2,
    name: 'תחנה 2. הרכבים שונים',
    description: 'צעירי נופית, הרכב גיטרות אנסנבל קרית טבעון, קונסרבטוריון ק. טבעון'
  },
  {
    id: 3,
    name: 'תחנה 3. מצפור החיפושיות - כלי קשת ',
    description: 'שלישיית לורה בורלא'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/