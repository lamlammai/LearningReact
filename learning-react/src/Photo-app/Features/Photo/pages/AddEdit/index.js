import React from 'react';
import Banner from '../../../../component/Banner/banner';
import PhotoForm from '../../component/PhotoForm';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={values => console.log('Form submit: ', values)} />
      </div>
    </div>
  );
}

export default AddEditPage;