import React from 'react';
import "../css/addFaq.css";

const AddFaq = ({ handleSubmit, handleChange, unique_id, ...props }) => {

    return (
        <div className='AddFaqContainer'>
            <form className='faqForm'>
                <h4 className="col-md-8 col-sm-12">ADD FAQ'S</h4>

                <div className="col-md-8 col-sm-12 form-group">
                    <input className="form-control"
                        type="text"
                        name="categories.cat"
                        value={props.categories.cat}
                        placeholder="Add Category"
                        onChange={handleChange}
                    />
                </div>


                <div className="col-md-8 col-sm-12 form-group">
                    <input className="form-control"
                        type="text"
                        name="question"
                        value={props.question}
                        placeholder="Add Question"
                        onChange={handleChange}
                    />
                </div>

                <textarea
                    placeholder='Add Answer'
                    name='answer'
                    value={props.answer}
                    onChange={handleChange}
                />

                <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Add</button>
            </form>

        </div>

    )
}

export default AddFaq;