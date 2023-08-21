import './viewpage.css';
import Avatar from '../assest/img/user-2.png';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
    }

    // const [notifications, setNotifications] = React.useState(null);
    // const openNotifications = Boolean(notifications);

    // const handleClickNotifications = (e) => {
    //     setNotifications(e.currentTarget);
    // }

    // const handleCloseNotifications = (e) => {
    //     setNotifications(null);
    // }

    return (
        <header className='layout-navbar navbar-blur'>
            <div className='navbar-content-container'>
                <div className='search-header'>
                    <button className='btn-search'>
                        <i className="icon-search fa-solid fa-magnifying-glass"></i>
                    </button>

                    <input className='input-search' type='text' placeholder='Search' />

                    <span className='meta-key'>⌘K</span>
                </div>

                <div className='header-right'>
                    <button className='btn-icon'>
                        <i className="icon-view fa-solid fa-earth-americas"></i>
                    </button>

                    <button className='btn-icon'>
                        <i className="icon-view fa-solid fa-laptop"></i>
                    </button>

                    <button className='btn-icon'>
                        <i className="icon-view fa-solid fa-bars"></i>
                    </button>

                    <button className='btn-icon'
                    >
                        <div className='fixed'>
                            <i className="icon-view fa-regular fa-bell"></i>
                        </div>

                        <div className='number'>
                            <span>2</span>
                        </div>
                    </button>

                    {/* Popup */}
                    <div className='v-avatar'>
                        <button className='btn-img'
                            id='demo-positioned-button'
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="tree"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <div className='v-responsive v-img'>
                                <img src={Avatar} />
                            </div>

                            <span className='node-online'></span>
                        </button>

                        <Menu
                            id='demo-positioned-menu'
                            aria-labelledby='demo-positioned-button'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                        >
                            <MenuItem onClose={handleClose}>
                                <div className='v-list-item'>
                                    <div className='img-profile'>
                                        <img className='img' src={Avatar} />
                                        <span className='node-online--2'></span>
                                    </div>


                                    <div className='name-profile'>
                                        <div className='name'>
                                            <h2>John Doe</h2>
                                        </div>

                                        <div className='status'>
                                            <p>admin</p>
                                        </div>
                                    </div>
                                </div>
                            </MenuItem>

                            <div className='border'></div>

                            <MenuItem onClick={handleClose}>
                                <nav className='nav-list'>
                                    <ul className='list-profile'>
                                        <li className='item-profile'>
                                            <i className="icon-profile fa-regular fa-user"></i>
                                            Profile
                                        </li>
                                    </ul>
                                </nav>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <nav className='nav-list'>
                                    <ul className='list-profile'>
                                        <li className='item-profile'>
                                            <i className="icon-profile fa-solid fa-gear"></i>
                                            Settings
                                        </li>
                                    </ul>
                                </nav>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <div className='fex-biling'>
                                    <nav className='nav-list'>
                                        <ul className='list-profile'>
                                            <li className='item-profile'>
                                                <i className="icon-profile fa-regular fa-credit-card"></i>
                                                Biling
                                            </li>
                                        </ul>
                                    </nav>

                                    <div className='flex-number'>3</div>
                                </div>
                            </MenuItem>

                            <div className='border'></div>

                            <MenuItem onClick={handleClose}>
                                <nav className='nav-list'>
                                    <ul className='list-profile'>
                                        <li className='item-profile'>
                                            <i className="icon-profile fa-solid fa-life-ring"></i>
                                            Help
                                        </li>
                                    </ul>
                                </nav>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <nav className='nav-list'>
                                    <ul className='list-profile'>
                                        <li className='item-profile'>
                                            <i className="icon-profile fa-solid fa-dollar-sign"></i>
                                            Pricing
                                        </li>
                                    </ul>
                                </nav>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <div className='fex-biling'>
                                    <nav className='nav-list'>
                                        <ul className='list-profile'>
                                            <li className='item-profile'>
                                                <i className="icon-profile fa-regular fa-circle-question"></i>
                                                FAQ
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

function MyMain() {
    return (
        <main className='layout-page-content'>
            <div className='page-content-container'>
                <div className='v-card--profile'>
                    <div className='avatar-card'>
                        <img className='img-card' src={Avatar} />
                    </div>

                    <div className='title'>
                        <h6 className='title-header'>Selina Kyle</h6>
                    </div>

                    <div className='status-header'>
                        <span className='v-status--admin'>Admin</span>
                    </div>

                    <div className='v-card-text '>
                        <div className='flex--proflie'>
                            <div className='v-theme--light'>
                                <i className="fa-regular fa-pen-to-square"></i>
                            </div>

                            <div>
                                <h6 className='text-h6'>1,230</h6>
                                <span className='text-sm'>Task Done</span>
                            </div>

                            <div className='v-theme--light'>
                                <i className="fa-solid fa-briefcase"></i>
                            </div>

                            <div>
                                <h6 className='text-h6'>568</h6>
                                <span className='text-sm'>Project Done</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content right */}
                {/* <div className='v-card-profile--right'>
                    <div className='avatar-card'>
                        <img src={Avatar} />
                    </div>
                </div> */}
            </div>
        </main>
    );
}

export default function MyViewPage() {
    return (
        <div className="layout-content-wrapper">
            <Header />

            <MyMain />
        </div>
    );
}