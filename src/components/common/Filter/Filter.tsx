import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

export interface ISearchForm {
  miles: string;
  zipcode: string;
  rating: string;
  budget: string
}

const ratingOptions = [
  { value: 'any', label: 'Any' },
  { value: '9', label: '9+' },
  { value: '8', label: '8+' },
  { value: '7', label: '7+' },
  { value: '6', label: '6+' },
  { value: '5', label: '5+' },
  { value: '4', label: '4+' },
  { value: '3', label: '3+' },
  { value: '2', label: '2+' },
];

const budgetOptions = [
  { value: 'any', label: 'Any' },
  { value: '20000', label: '$20,000' },
  { value: '15000', label: '$15,000' },
  { value: '10000', label: '$10,000' },
  { value: '8000', label: '$8,000' },
  { value: '6000', label: '$6,000' },
  { value: '4000', label: '$4,000' },
  { value: '2000', label: '$2,000' },
];

const Filter: React.FC<{ onSubmit: (data: ISearchForm) => void }> = ({ onSubmit }) => {

  const { register, handleSubmit } = useForm<ISearchForm>();

  const formSubmit: SubmitHandler<ISearchForm> = (data) => {
    onSubmit(data);
  };

  return (
    <div className="col-md-4">
      <div className="card card-body mb-4">
        <h4 className="mb-3">By Location</h4>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Miles From"
                  {...register('miles')}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Zipcode"
                  {...register('zipcode')}
                />
              </div>
            </div>
          </div>
          <input type="submit" value="Find Bootcamps" className="btn btn-primary btn-block" />
        </form>
      </div>

      <h4>Filter</h4>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="form-group">
          <label>Rating</label>
          <select className="custom-select mb-2" {...register('rating')}>
            {ratingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Budget</label>
          <select className="custom-select mb-2" {...register('budget')}>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <input type="submit" value="Find Bootcamps" className="btn btn-primary btn-block" />
      </form>
    </div>

    // <div className="col-md-4">
    //   <div className="card card-body mb-4">
    //     <h4 className="mb-3">By Location</h4>
    //     <form>
    //       <div className="row">
    //         <div className="col-md-6">
    //           <div className="form-group">
    //             <input
    //               type="text"
    //               className="form-control"
    //               name="miles"
    //               placeholder="Miles From"
    //             />
    //           </div>
    //         </div>
    //         <div className="col-md-6">
    //           <div className="form-group">
    //             <input
    //               type="text"
    //               className="form-control"
    //               name="zipcode"
    //               placeholder="Enter Zipcode"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <input
    //         type="submit"
    //         value="Find Bootcamps"
    //         className="btn btn-primary btn-block"
    //       />
    //     </form>
    //   </div>

    //   <h4>Filter</h4>
    //   <form>
    //     {/* <div className="form-group">
    //       <label> Career</label>
    //       <select className="custom-select mb-2">
    //         <option value="any" selected>Any</option>
    //         <option value="Web Development">Web Development</option>
    //         <option value="Mobile Development">Mobile Development</option>
    //         <option value="UI/UX">UI/UX</option>
    //         <option value="Data Science">Data Science</option>
    //         <option value="Business">Business</option>
    //         <option value="Other">Other</option>
    //       </select>
    //     </div> */}

    //     <div className="form-group">
    //       <label> Rating</label>
    //       <select className="custom-select mb-2">
    //         <option value="any" selected>Any</option>
    //         <option value="9">9+</option>
    //         <option value="8">8+</option>
    //         <option value="7">7+</option>
    //         <option value="6">6+</option>
    //         <option value="5">5+</option>
    //         <option value="4">4+</option>
    //         <option value="3">3+</option>
    //         <option value="2">2+</option>
    //       </select>
    //     </div>

    //     <div className="form-group">
    //       <label> Budget</label>
    //       <select className="custom-select mb-2">
    //         <option value="any" selected>Any</option>
    //         <option value="20000">$20,000</option>
    //         <option value="15000">$15,000</option>
    //         <option value="10000">$10,000</option>
    //         <option value="8000">$8,000</option>
    //         <option value="6000">$6,000</option>
    //         <option value="4000">$4,000</option>
    //         <option value="2000">$2,000</option>
    //       </select>
    //     </div>
    //     <input
    //       type="submit"
    //       value="Find Bootcamps"
    //       className="btn btn-primary btn-block"
    //     />
    //   </form>
    // </div>
  )
}

export default Filter;
