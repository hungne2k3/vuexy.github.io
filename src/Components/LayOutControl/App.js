import { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import '../LayOutControl/Control.css';
import logo from '../../assest/img/logo-1.webp';
import LayOutTablePage from '../../LayOutTable/LayOutTable';
import LayOutViewPage from '../../LayOutViewPage/LayOutViewPage';

function LayOutControl() {
  const [showChildren, setShowChildren] = useState(false);
  const [showChildren1, setShowChildren1] = useState(false);
  const [showChildren2, setShowChildren2] = useState(false);

  const handleShowChildren = () => {
    setShowChildren(!showChildren);
  }

  const handleShowChildren1 = () => {
    setShowChildren1(!showChildren1);
  }

  const handleShowChildren2 = () => {
    setShowChildren2(!showChildren2);
  }

  return (
    <>
      <div className='layout-nav-type-vertical'>
        <aside className='layout-vertical-nav scrolled'>
          <div className='nav-header'>
            <img src={logo} />
          </div>

          <div className='vertical-nav-items-shadow'></div>

          <ul className='nav-items'>
            <li className='nav-group'>
              <div className='nav-group-label' onClick={handleShowChildren}>
                <i className="icon-house fa-solid fa-house"></i>
                <span className='nav-item-title'>Dashboards</span>
                <span className='nav-item-badge'>3</span>
                <i className={`icon-right fa-solid fa-chevron-right ${showChildren ? 'icon-down' : ''}`}></i>
              </div>

              {
                showChildren && (
                  <ul className={`nav-group-children ${showChildren ? 'show' : ''}`}>
                    <li className='nav-link'>
                      <a href='#'>
                        <span className='nav-item-title'>Analytics</span>
                      </a>
                    </li>

                    <li className='nav-link'>
                      <a href='#'>
                        <span className='nav-item-title'>eCommerce</span>
                      </a>
                    </li>

                    <li className='nav-link'>
                      <a href='#'>
                        <span className='nav-item-title'>Analytics</span>
                      </a>
                    </li>
                  </ul>
                )
              }
            </li>

            <li className='nav-section-title'>
              <div className='title-wrapper'>
                <span className='title-text'>Apps & Pages</span>
              </div>
            </li>

            <li className='nav-link'>
              <a href='#'>
                <i className="icon-lv1 fa-regular fa-envelope"></i>
                <span className='nav-item-title right-text'>Email</span>
              </a>
            </li>

            <li className='nav-link'>
              <a href='#'>
                <i className="icon-lv1 fa-regular fa-comment"></i>
                <span className='nav-item-title right-text'>Chat</span>
              </a>
            </li>

            <li className='nav-link'>
              <a href='#'>
                <i className="icon-lv1 fa-regular fa-calendar"></i>
                <span className='nav-item-title right-text'>Calendar</span>
              </a>
            </li>

            <li className='nav-group'>
              <div className='nav-group-label' onClick={handleShowChildren1}>
                <i className="icon fa-solid fa-file-invoice"></i>
                <span className='nav-item-title'>Invoice</span>
                <i className={`icon-right right fa-solid fa-chevron-right ${showChildren1 ? 'icon-down' : ''}`}></i>
              </div>

              {
                showChildren1 && (
                  <ul className={`nav-group-children ${showChildren1 ? 'show' : ''}`}>
                    <li className='nav-link'>
                      <a href='#'>
                        <span className='nav-item-title'>List</span>
                      </a>
                    </li>

                    <li className='nav-link'>
                      <a href='#'>
                        <span className='nav-item-title'>Preview</span>
                      </a>
                    </li>

                    <li className='nav-link'>
                      <a href='#'>
                        <span className='nav-item-title'>Edit</span>
                      </a>
                    </li>

                    <li className='nav-link'>
                      <a href='#'>
                        <span className='nav-item-title'>Add</span>
                      </a>
                    </li>
                  </ul>
                )
              }
            </li>

            <li className='nav-group'>
              <div className='nav-group-label' onClick={handleShowChildren2}>
                <i className="icon fa-regular fa-user"></i>
                <span className='nav-item-title'>User</span>
                <i className={`icon-right right-1 fa-solid fa-chevron-right ${showChildren2 ? 'icon-down' : ''}`}></i>
              </div>

              {
                showChildren2 && (
                  <ul className={`nav-group-children ${showChildren2 ? 'show' : ''}`}>
                    <li className='nav-link'>
                      <Link to='/list'>
                        <span className='nav-item-title'>List</span>
                      </Link>
                    </li>

                    <li className='nav-link'>
                      <Link to='/view'>
                        <span className='nav-item-title'>View</span>
                      </Link>
                    </li>
                  </ul>
                )
              }
            </li>

            <li className='nav-link'>
              <a href='#'>
                <i className="icon-lv1 fa-solid fa-gears"></i>
                <span className='nav-item-title right-text'>Roles & Permissions</span>
              </a>
            </li>

            <li className='nav-link'>
              <a href='#'>
                <i className="icon-lv1 fa-regular fa-file"></i>
                <span className='nav-item-title right-text'>Pages</span>
              </a>
            </li>

            <li className='nav-link'>
              <a href='#'>
                <i className="icon-lv1 fa-solid fa-lock"></i>
                <span className='nav-item-title right-text'>Authentication</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}


// function LayOutTable() {
//   const [showBtn, setShowBtn] = useState(false);

//   const handleShowbtn = () => {
//     setShowBtn(!showBtn);
//   }

//   useEffect(() => {
//     const handleDocumentElement = (e) => {
//       const targetElement = e.target;
//       const dropdowntTogger = document.querySelector('.btn-selection');

//       if (!targetElement.closest('.nav-list--selection') && !targetElement.closest('.btn-selection')) {
//         setShowBtn(false);
//       }
//     }

//     document.addEventListener('click', handleDocumentElement);

//     return (
//       document.removeEventListener('click', handleDocumentElement)
//     );
//   })

//   const [showBtn1, setShowBtn1] = useState(false);

//   const handleShowbtn1 = () => {
//     setShowBtn1(!showBtn1);
//   }

//   useEffect(() => {
//     const handleDocumentElement = (e) => {
//       const targetElement = e.target;
//       const dropdowntTogger = document.querySelector('.btn-selection');

//       if (!targetElement.closest('.nav-list--selection') && !targetElement.closest('.btn-selection')) {
//         setShowBtn1(false);
//       }
//     }

//     document.addEventListener('click', handleDocumentElement);

//     return (
//       document.removeEventListener('click', handleDocumentElement)
//     );
//   })

//   const [showAddPeople, setShowAddPeople] = useState(false);

//   const handleShowAdd = () => {
//     setShowAddPeople(true);
//   }

//   const handleCloseAdd = () => {
//     setShowAddPeople(false);
//   }

//   useEffect(() => {
//     const handleDocumentClick = (e) => {
//       // Kiểm tra xem sự kiện click có xảy ra bên trong hộp thoại
//       const dialog = document.querySelector('.v-navigation-drawer--temporary');

//       if (dialog && !dialog.contains(e.target)) {
//         setShowAddPeople(false);
//       }

//       // dang ky su kien toan cuc
//       document.addEventListener('click', handleDocumentClick);

//       return () => {
//         document.removeEventListener('click', handleDocumentClick);
//       }
//     }

//     // sd classList de them show
//     // const handleAddShow = (e) => {
//     //   // Kiểm tra xem sự kiện click có xảy ra bên trong hộp thoại
//     //   const dialog = document.querySelector('.v-navigation-drawer--temporary');
//     //   const addBtn = document.querySelector('.v-btn-2');

//     //   if (dialog && !dialog.contains(e.target) && addBtn !== e.target) {
//     //     setShowAddPeople(dialog.classList.add('show'));
//     //   }

//     //   // dang ky su kien toan cuc
//     //   document.addEventListener('click', handleAddShow);

//     //   return () => {
//     //     document.removeEventListener('click', handleAddShow);
//     //   }
//     // }
//   })

//   // useEffect(() => {
//   //   const handleShowAdd = () => {
//   //     setShowAddPeople(!showAddPeople);
//   //   }

//   //   document.addEventListener('show', handleShowAdd);

//   //   return () => {
//   //     document.removeEventListener('show', handleShowAdd);

//   //   }
//   // // }, [showAddPeople]);

//   // const [close, setClose] = useState(true);

//   // useEffect(() => {
//   //   const handleShowAdd = () => {
//   //     setClose(!close);
//   //   }

//   //   document.addEventListener('close', handleShowAdd);

//   //   return () => {
//   //     document.removeEventListener('close', handleShowAdd);

//   //   }
//   // }, [close])

//   return (
//     <>
//       <section className='section'>
//         <div className='v-card--table'>
//           <div className='v-card--item'>
//             <div className='v-card-item__content'>
//               <div className='v-card-title'>
//                 Search Filter
//               </div>
//             </div>
//           </div>

//           <div className='v-card-text flex'>
//             <div className='list-seletion'>
//               <button className='btn-selection' onClick={handleShowbtn}>
//                 10
//                 <i className="fa-solid fa-chevron-down"></i>
//               </button>

//               <div>
//                 {showBtn && (
//                   <div className='selection-chirdlen'>
//                     <ul className={`nav-list--selection ${showBtn ? '' : 'hidden'}`}>
//                       <li className='nav-item--selection'>
//                         10
//                       </li>

//                       <li className='nav-item--selection'>
//                         15
//                       </li>

//                       <li className='nav-item--selection'>
//                         20
//                       </li>

//                       <li className='nav-item--selection'>
//                         50
//                       </li>

//                       <li className='nav-item--selection'>
//                         100
//                       </li>

//                       <li className='nav-item--selection'>
//                         App
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className='app-user-search'>
//               <div className='input-control'>
//                 <input className='input' type='text' placeholder='Search' />
//               </div>

//               <div>
//                 <button type='button' className='v-btn'>
//                   <span className='v-btn__prepend'>
//                     <i className="icon-btn fa-solid fa-computer"></i>
//                   </span>

//                   <span className='v-btn__content'> Export </span>
//                 </button>
//               </div>

//               <div>
//                 <button
//                   type='button'
//                   className={`v-btn-2`}
//                   onClick={handleShowAdd}
//                 >
//                   <span className='v-btn__prepend-2'>
//                     <i className="icon-btn-2 fa-regular fa-plus"></i>
//                   </span>

//                   <span className='v-btn__content-2' >Add New User </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <CallApi />

//         <FooterLayOut />

//         {showAddPeople && (
//           <nav className={`v-navigation-drawer v-navigation-drawer--temporary ${showAddPeople ? 'show' : ''}`}>
//             <div className='v-navigation-drawer__content'>
//               <div className='header-text'>
//                 <div className='add-header'><h3 className='font-weight-medium'>Add User</h3></div>

//                 <button onClick={handleCloseAdd} type='button' className='btn-close'>
//                   <i className="icon-lose fa-solid fa-xmark" ></i>
//                 </button>
//               </div>

//               <div className='v-card-text--2'>
//                 <form className='v-form'>
//                   <div className='v-row--input'>
//                     <div className='app-text-field--2 '>
//                       <label className='v-label'>
//                         Full Name
//                       </label>

//                       <div className='v-input'>
//                         <div className='v-input__control'>
//                           <div className='v-field__field'>
//                             <input className='v-field__input' type='text' />
//                           </div>
//                         </div>

//                         <div className='v-input__details'>
//                           <div className='v-messages'>
//                             <label className='v-messages__message'></label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='v-row--input'>
//                     <div className='app-text-field--2 '>
//                       <label className='v-label'>
//                         Email
//                       </label>

//                       <div className='v-input'>
//                         <div className='v-input__control'>
//                           <div className='v-field__field'>
//                             <input className='v-field__input' type='text' />
//                           </div>
//                         </div>

//                         <div className='v-input__details'>
//                           <div className='v-messages'>
//                             <label className='v-messages__message'></label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='v-row--input'>
//                     <div className='app-text-field--2 '>
//                       <label className='v-label'>
//                         Company
//                       </label>

//                       <div className='v-input'>
//                         <div className='v-input__control'>
//                           <div className='v-field__field'>
//                             <input className='v-field__input' type='text' />
//                           </div>
//                         </div>

//                         <div className='v-input__details'>
//                           <div className='v-messages'>
//                             <label className='v-messages__message'></label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='v-row--input'>
//                     <div className='app-text-field--2 '>
//                       <label className='v-label'>
//                         Country
//                       </label>

//                       <div className='v-input'>
//                         <div className='v-input__control'>
//                           <div className='v-field__field'>
//                             <input className='v-field__input' type='text' />
//                           </div>
//                         </div>

//                         <div className='v-input__details'>
//                           <div className='v-messages'>
//                             <label className='v-messages__message'></label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='v-row--input'>
//                     <div className='app-text-field--2 '>
//                       <label className='v-label'>
//                         Contact
//                       </label>

//                       <div className='v-input'>
//                         <div className='v-input__control'>
//                           <div className='v-field__field'>
//                             <input className='v-field__input' type='number' />
//                           </div>
//                         </div>

//                         <div className='v-input__details'>
//                           <div className='v-messages'>
//                             <label className='v-messages__message'></label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='v-row--input'>
//                     <label className='v-label v-label--text'>
//                       Select Role
//                     </label>

//                     <div className='input-icon'>
//                       <input className='btn-selection--2' onClick={handleShowbtn1} />
//                       <i className={`icon-down--2 fa-solid fa-chevron-down ${showBtn1 ? 'icon-top' : ''}`}></i>
//                     </div>


//                     <div>
//                       {showBtn1 && (
//                         <div className='selection-chirdlen'>
//                           <ul className={`nav-list--selection position nav-select ${showBtn1 ? '' : 'hidden'}`}>
//                             <li className='nav-item--selection'>
//                               Admin
//                             </li>

//                             <li className='nav-item--selection'>
//                               Authort
//                             </li>

//                             <li className='nav-item--selection'>
//                               Edittor
//                             </li>

//                             <li className='nav-item--selection'>
//                               Maintainer
//                             </li>

//                             <li className='nav-item--selection'>
//                               Subcriber
//                             </li>
//                           </ul>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className='btn-submit'>
//                     <button className='v-btn--elevated'>
//                       <span className='v-btn--text color-text'> Submit </span>
//                     </button>

//                     <button className='v-theme--light hover'>
//                       <span className='v-btn--text'> Cancel </span>
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </nav>

//         )}

//         {showAddPeople && (
//           <div className='v-navigation-drawer__scrim' onClick={handleCloseAdd}></div>
//         )}

//       </section>
//     </>
//   );
// }

// Call Api render people
// function CallApi() {
//   const [datas, setDatas] = useState([]);

//   const elementTables = ['User', 'Role', 'Plan', 'Billing', 'Status', 'Actions'];

//   useEffect(() => {
//     fetch('https://api.tablebackend.com/v1/rows/Yoxbu0yKn7R2')
//       .then(responsive => responsive.json())
//       .then(preview => setDatas(preview.data))
//   }, [])

//   return (
//     <>
//       <table >
//         <thead>
//           <tr>
//             {elementTables.map((table) => (
//               <th key={table}>{table}</th>
//             ))}
//           </tr>
//         </thead>

//         <tbody className='v-data-table__tbody'>
//           {datas.map((dataRender) => (
//             <tr className='v-data-table__tr' key={dataRender._id}>
//               <td className='v-data-table__td'>
//                 <div className='d-flex'>
//                   <div className='v-avatar'>
//                     <div className='v-img'>
//                       <img className='v-img__img' src={dataRender.attachment} />
//                     </div>
//                   </div>
//                 </div>

//                 <div className='d-flex'>
//                   <div className='v-avatar'>
//                     <h6 className='text-base'>
//                       <a href='#'>{dataRender.name}</a>
//                     </h6>
//                   </div>

//                   <div className='v-email'>
//                     <h6 className='email'>{dataRender.email}</h6>
//                   </div>
//                 </div>
//               </td>

//               <td>
//                 <div className='role-flex'>
//                   <div className='icon-role'>
//                     <i className={dataRender.iconrole}></i>
//                   </div>

//                   <div className='name-role'>
//                     {dataRender.age}
//                   </div>
//                 </div>
//               </td>

//               <td>{dataRender.plane}</td>
//               <td>{dataRender.billing}</td>
//               <td>
//                 <div className='v-active'>
//                   <span className='v-chip--label'>
//                     {dataRender.active}
//                   </span>
//                 </div>
//               </td>

//               <td>
//                 <div className='action'>
//                   <div className='icon-1'>
//                     <i className="icon-active fa-solid fa-trash-can"></i>
//                   </div>

//                   <div className='icon-1'>
//                     <i className="icon-active fa-regular fa-pen-to-square"></i>
//                   </div>

//                   <div className='icon-1'>
//                     <i className="icon-active fa-solid fa-ellipsis-vertical"></i>
//                   </div>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

// function FooterLayOut() {
//   return (
//     <div className='footer-lauout'>
//       <p className='text-sm'>Showing 1 to 10 of 50 entries</p>

//       <nav className='v-pagination '>
//         <ul className='v-pagination__list'>
//           <li className='v-pagination__prev'>
//             <button type='buttom' className='v-btn--disabled'>
//               <span className='v-btn__content'> Previous </span>
//             </button>
//           </li>

//           <li className='v-pagination__prev'>
//             <button type='buttom' className='v-btn--icon select'>
//               <span className='v-btn__content--number'> 1 </span>
//             </button>
//           </li>

//           <li className='v-pagination__prev'>
//             <button type='buttom' className='v-btn--icon'>
//               <span className='v-btn__content--number'> 2 </span>
//             </button>
//           </li>

//           <li className='v-pagination__prev'>
//             <button type='buttom' className='v-btn--icon'>
//               <span className='v-btn__content--number'> 3 </span>
//             </button>
//           </li>

//           <li className='v-pagination__prev'>
//             <button type='buttom' className='v-btn--icon'>
//               <span className='v-btn__content--number'> 4 </span>
//             </button>
//           </li>

//           <li className='v-pagination__prev'>
//             <button type='buttom' className='v-btn--icon'>
//               <span className='v-btn__content--number'> 5 </span>
//             </button>
//           </li>

//           <li className='v-pagination__prev'>
//             <button type='buttom' className='v-btn--disabled v-btn--2'>
//               <span className='v-btn__content--2'> Next </span>
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <LayOutControl />

      <Routes>
        <Route path='/list' element={<LayOutTablePage />}/>
        <Route path='/view' element={<LayOutViewPage />}/>
      </Routes>
    </div>
  );
}

export default App;
