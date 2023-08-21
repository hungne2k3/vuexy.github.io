import { useEffect, useState } from 'react';
import CallApi from '../CallApi/CallApi';
import FooterLayOut from '../FooterLayOut/FooterLayOut';

export default function MyLayOutTable() {
    const [showBtn, setShowBtn] = useState(false);

    const handleShowbtn = () => {
        setShowBtn(!showBtn);
    }

    useEffect(() => {
        const handleDocumentElement = (e) => {
            const targetElement = e.target;
            const dropdowntTogger = document.querySelector('.btn-selection');

            if (!targetElement.closest('.nav-list--selection') && !targetElement.closest('.btn-selection')) {
                setShowBtn(false);
            }
        }

        document.addEventListener('click', handleDocumentElement);

        return (
            document.removeEventListener('click', handleDocumentElement)
        );
    })

    const [showBtn1, setShowBtn1] = useState(false);

    const handleShowbtn1 = () => {
        setShowBtn1(!showBtn1);
    }

    useEffect(() => {
        const handleDocumentElement = (e) => {
            const targetElement = e.target;
            const dropdowntTogger = document.querySelector('.btn-selection');

            if (!targetElement.closest('.nav-list--selection') && !targetElement.closest('.btn-selection')) {
                setShowBtn1(false);
            }
        }

        document.addEventListener('click', handleDocumentElement);

        return (
            document.removeEventListener('click', handleDocumentElement)
        );
    })

    const [showAddPeople, setShowAddPeople] = useState(false);

    const handleShowAdd = () => {
        setShowAddPeople(true);
    }

    const handleCloseAdd = () => {
        setShowAddPeople(false);
    }

    useEffect(() => {
        const handleDocumentClick = (e) => {
            // Kiểm tra xem sự kiện click có xảy ra bên trong hộp thoại
            const dialog = document.querySelector('.v-navigation-drawer--temporary');

            if (dialog && !dialog.contains(e.target)) {
                setShowAddPeople(false);
            }

            // dang ky su kien toan cuc
            document.addEventListener('click', handleDocumentClick);

            return () => {
                document.removeEventListener('click', handleDocumentClick);
            }
        }
    })

    return (
        <>
            <section className='section'>
                <div className='v-card--table'>
                    <div className='v-card--item'>
                        <div className='v-card-item__content'>
                            <div className='v-card-title'>
                                Search Filter
                            </div>
                        </div>
                    </div>

                    <div className='v-card-text flex'>
                        <div className='list-seletion'>
                            <button className='btn-selection' onClick={handleShowbtn}>
                                10
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>

                            <div>
                                {showBtn && (
                                    <div className='selection-chirdlen'>
                                        <ul className={`nav-list--selection ${showBtn ? '' : 'hidden'}`}>
                                            <li className='nav-item--selection'>
                                                10
                                            </li>

                                            <li className='nav-item--selection'>
                                                15
                                            </li>

                                            <li className='nav-item--selection'>
                                                20
                                            </li>

                                            <li className='nav-item--selection'>
                                                50
                                            </li>

                                            <li className='nav-item--selection'>
                                                100
                                            </li>

                                            <li className='nav-item--selection'>
                                                App
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='app-user-search'>
                            <div className='input-control'>
                                <input className='input' type='text' placeholder='Search' />
                            </div>

                            <div>
                                <button type='button' className='v-btn'>
                                    <span className='v-btn__prepend'>
                                        <i className="icon-btn fa-solid fa-computer"></i>
                                    </span>

                                    <span className='v-btn__content'> Export </span>
                                </button>
                            </div>

                            <div>
                                <button
                                    type='button'
                                    className={`v-btn-2`}
                                    onClick={handleShowAdd}
                                >
                                    <span className='v-btn__prepend-2'>
                                        <i className="icon-btn-2 fa-regular fa-plus"></i>
                                    </span>

                                    <span className='v-btn__content-2' >Add New User </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <CallApi />

                <FooterLayOut />

                {showAddPeople && (
                    <nav className={`v-navigation-drawer v-navigation-drawer--temporary ${showAddPeople ? 'show-menu' : ''}`}>
                        <div className='v-navigation-drawer__content'>
                            <div className='header-text'>
                                <div className='add-header'><h3 className='font-weight-medium'>Add User</h3></div>

                                <button onClick={handleCloseAdd} type='button' className='btn-close'>
                                    <i className="icon-lose fa-solid fa-xmark" ></i>
                                </button>
                            </div>

                            <div className='v-card-text--2'>
                                <form className='v-form'>
                                    <div className='v-row--input'>
                                        <div className='app-text-field--2 '>
                                            <label className='v-label'>
                                                Full Name
                                            </label>

                                            <div className='v-input'>
                                                <div className='v-input__control'>
                                                    <div className='v-field__field'>
                                                        <input className='v-field__input' type='text' />
                                                    </div>
                                                </div>

                                                <div className='v-input__details'>
                                                    <div className='v-messages'>
                                                        <label className='v-messages__message'></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='v-row--input'>
                                        <div className='app-text-field--2 '>
                                            <label className='v-label'>
                                                Email
                                            </label>

                                            <div className='v-input'>
                                                <div className='v-input__control'>
                                                    <div className='v-field__field'>
                                                        <input className='v-field__input' type='text' />
                                                    </div>
                                                </div>

                                                <div className='v-input__details'>
                                                    <div className='v-messages'>
                                                        <label className='v-messages__message'></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='v-row--input'>
                                        <div className='app-text-field--2 '>
                                            <label className='v-label'>
                                                Company
                                            </label>

                                            <div className='v-input'>
                                                <div className='v-input__control'>
                                                    <div className='v-field__field'>
                                                        <input className='v-field__input' type='text' />
                                                    </div>
                                                </div>

                                                <div className='v-input__details'>
                                                    <div className='v-messages'>
                                                        <label className='v-messages__message'></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='v-row--input'>
                                        <div className='app-text-field--2 '>
                                            <label className='v-label'>
                                                Country
                                            </label>

                                            <div className='v-input'>
                                                <div className='v-input__control'>
                                                    <div className='v-field__field'>
                                                        <input className='v-field__input' type='text' />
                                                    </div>
                                                </div>

                                                <div className='v-input__details'>
                                                    <div className='v-messages'>
                                                        <label className='v-messages__message'></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='v-row--input'>
                                        <div className='app-text-field--2 '>
                                            <label className='v-label'>
                                                Contact
                                            </label>

                                            <div className='v-input'>
                                                <div className='v-input__control'>
                                                    <div className='v-field__field'>
                                                        <input className='v-field__input' type='number' />
                                                    </div>
                                                </div>

                                                <div className='v-input__details'>
                                                    <div className='v-messages'>
                                                        <label className='v-messages__message'></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='v-row--input'>
                                        <label className='v-label v-label--text'>
                                            Select Role
                                        </label>

                                        <div className='input-icon'>
                                            <input className='btn-selection--2' onClick={handleShowbtn1} />
                                            <i className={`icon-down--2 fa-solid fa-chevron-down ${showBtn1 ? 'icon-top' : ''}`}></i>
                                        </div>


                                        <div>
                                            {showBtn1 && (
                                                <div className='selection-chirdlen'>
                                                    <ul className={`nav-list--selection position nav-select ${showBtn1 ? '' : 'hidden'}`}>
                                                        <li className='nav-item--selection'>
                                                            Admin
                                                        </li>

                                                        <li className='nav-item--selection'>
                                                            Authort
                                                        </li>

                                                        <li className='nav-item--selection'>
                                                            Edittor
                                                        </li>

                                                        <li className='nav-item--selection'>
                                                            Maintainer
                                                        </li>

                                                        <li className='nav-item--selection'>
                                                            Subcriber
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className='btn-submit'>
                                        <button className='v-btn--elevated'>
                                            <span className='v-btn--text color-text'> Submit </span>
                                        </button>

                                        <button className='v-theme--light hover'>
                                            <span className='v-btn--text'> Cancel </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </nav>

                )}

                {showAddPeople && (
                    <div className='v-navigation-drawer__scrim' onClick={handleCloseAdd}></div>
                )}

            </section >
        </>
    );
}