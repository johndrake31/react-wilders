import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyleContainerRose } from './styles/StyleContainer';
import { StyleForm } from './styles/form-inputs/StyleForm';
import { StyleButton, StyleButtonY } from './styles/StyleButton';
import classes from './AddWilderForm.module.css';
import Skill from './Skill';

const AddWilderForm = (props) => {
  const [skills, setSkills] = useState([]);
  const [skillString, setSkillString] = useState('');
  const history = useHistory();
  const nameRef = useRef();
  const cityRef = useRef();
  const skillRef = useRef();
  const checkRef = useRef();

  // HANDLERS
  const skillStringHandler = (e) => {
    setSkillString(e.target.value);
  };

  const addSkillHandler = () => {
    if (skills.includes(skillRef.current.value.toLowerCase())) {
      setSkillString('');
      return;
    }

    setSkills((prevState) => {
      return [...prevState, skillRef.current.value.toLowerCase()];
    });
    setSkillString('');
  };

  const removeSkillHandler = (title) => {
    const arr = skills.filter(
      (skill) => skill.toLowerCase() !== title.toLowerCase(),
    );
    setSkills(arr);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (checkRef.current.checked) {
      const skillsArr = skills.map((skill) => ({
        title: skill,
        votes: 0,
      }));

      fetch('http://localhost:4000/api/wilders', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
          name: nameRef.current.value,
          city: cityRef.current.value,
          skills: skillsArr,
        }),
      })
        .then((res) => res.json())
        .then((data) => { 
            console.log(data)
            history.push('/wilders');
        });

    }
  };

  return (
    <StyleContainerRose>
      <StyleForm onSubmit={onSubmitHandler}>
        <label>Name</label>
        <input ref={nameRef} type='text' />
        <label>City</label>
        <input ref={cityRef} type='text' />

        {/* SKILL ADD */}
        <div>
          <input
            onChange={skillStringHandler}
            ref={skillRef}
            value={skillString}
            type='text'
          />
          <StyleButtonY onClick={addSkillHandler}>Add</StyleButtonY>
        </div>

        {/* SKILL LISTING */}
        <div>
          {skills &&
            skills.map((skill, index) => (
              <Skill
                onClick={removeSkillHandler}
                key={index}
                title={skill}
                votes={0}
              />
            ))}
        </div>

        <div className={classes['flex-r']}>
          <input ref={checkRef} className={classes.checkbox} type='checkbox' />
          <label>Check Box When Ready to Submit</label>
        </div>
        <StyleButton>Click</StyleButton>
      </StyleForm>
    </StyleContainerRose>
  );
};

export default AddWilderForm;

// add submit and redirect
