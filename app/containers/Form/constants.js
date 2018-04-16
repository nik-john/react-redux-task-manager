/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// import { arrayToMap } from '../../utils';

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';

export const START_FORM = 'ss/Form/START_FORM';
export const UPDATE_REPLY = 'ss/Form/UPDATE_REPLY';
export const UPDATE_AND_NEXT = 'ss/Form/UPDATE_AND_NEXT';
export const NEXT = 'ss/Form/NEXT';
export const BACK = 'ss/Form/BACK';
export const GO_TO_STEP = 'ss/Form/GO_TO_STEP';
export const PREVIEW = 'ss/Form/PREVIEW';

export const QUESTIONS = [{
  id: 'A01',
  text: 'What happened to your product?',
  reply: '',
  type: 'string',
  next: 'A02',
},
{
  id: 'A02',
  text: 'When did the incident occur?',
  reply: '',
  type: 'date',
  next: 'A04',
},
{
  id: 'A03',
  text: 'When was your last claim submission?',
  reply: '',
  type: 'date',
  next: 'A04',
},
{
  id: 'A04',
  text: 'When did you purchase your product?',
  reply: '',
  type: 'date',
  next: 'A05',
},
{
  id: 'A05',
  text: 'How much did your product cost?',
  reply: '',
  type: 'number',
  next: 'A06',
},
{
  id: 'A06',
  text: 'Are you insured elsewhere?',
  reply: '',
  type: 'boolean',
  next: 'B01',
},
{
  id: 'A07',
  text: 'Name of additional insurance?',
  reply: '',
  type: 'string',
  next: null,
},
{
  id: 'B01',
  text: 'Was a police report filed?',
  reply: '',
  type: 'boolean',
  next: 'C01',
},
{
  id: 'C01',
  text: 'Please provide us with your full name?',
  reply: '',
  type: 'string',
  next: 'C02',
},
{
  id: 'C02',
  text: 'Please provide us with a contact number?',
  reply: '',
  type: 'string',
  next: 'C03',
},
{
  id: 'C03',
  text: 'Please provide us with a contact email address?',
  reply: '',
  type: 'string',
  next: null,
},
{
  id: 'C04',
  text: 'Please provide us with your date of birth?',
  reply: '',
  type: 'date',
  next: null,
}].map((q, i) => ({ ...q, index: i }));

