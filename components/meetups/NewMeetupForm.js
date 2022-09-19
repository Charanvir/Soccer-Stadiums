import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();
  const capacityInputRef = useRef();
  const dateOpenedInputRef = useRef();
  const teamInputRef = useRef();
  const categoryInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Stadium Name</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Stadium Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.controlHalf}>
          <label htmlFor='city'>City</label>
          <input type='text' required id='city' ref={cityInputRef} />

          <label htmlFor='country'>Country</label>
          <input type='text' required id='countr' ref={countryInputRef} />
        </div>
        <div className={classes.controlHalf}>
          <label htmlFor='capacity'>Capacity</label>
          <input type='number' required id='capacity' ref={capacityInputRef} />

          <label htmlFor='dateOpened'>Date Opened</label>
          <input type='date' required id='dateOpened' ref={dateOpenedInputRef} />
        </div>
        <div className={classes.controlHalf}>
          <label htmlFor='team'>Teams</label>
          <input type='text' required id='team' ref={teamInputRef} />

          <label htmlFor='category'>Category</label>
          <select type='select' required id='category' ref={categoryInputRef}>
            <option value='soccer'>Soccer</option>
            <option value='football'>Football</option>
            <option value='hockey'>Hockey</option>
            <option value='basketball'>Basketball</option>
            <option value='baseball'>Baseball</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='2'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
