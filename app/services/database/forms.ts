import * as firebase from 'firebase';
import Constants from 'expo-constants';
import { Form } from '../../components/saved-forms/saved-forms';

function formData() {
  return firebase
    .database()
    .ref('userData')
    .child(Constants.installationId)
    .child('saved')
    .child('forms');
}
/*
  add new form
remove form
update form

getAllForms listener
remove listener ^
*/

export function addForm(form: Form) {
  formData().push(form);
}

export function editForm(formId: string, form: Form) {
  formData()
    .child(formId)
    .set(form)
    .catch(e => {
      console.error('mpf Error editing form in firebase: ', e);
    });
}

export function deleteForm(formId: string) {
  formData()
    .child(formId)
    .remove()
    .catch(e => {
      console.error('mpf Error deleting form from firebase: ', e);
    });
}

export async function getForm(formId: string): Promise<Form> {
  const snapshot = await formData()
    .child(formId)
    .once('value');
  return snapshot.val();
}

export function listenToAllForms(
  callback: (forms: { [name: string]: Form }) => void,
) {
  formData().on('value', snapshot => {
    callback(snapshot.val() ?? {});
  });
}

export function stopListenToAllForms() {
  formData().off('value');
}

// TypeScript type guard: https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
export function isFormType(form: Record<string, any>): form is Form {
  return (
    form.name &&
    form.email &&
    form.phone &&
    form.password &&
    form.description &&
    form.date &&
    form.time &&
    form.checked
  );
}
