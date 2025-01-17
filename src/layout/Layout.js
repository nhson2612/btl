import { Button, IconButton, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import LanguageIcon from '@mui/icons-material/Language';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import DiamondIcon from '@mui/icons-material/Diamond';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/UserSlice';
import Rating from '@mui/material/Rating';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

const LayOut = ({ children }) => {
    const heart = useSelector(selectUser).hearts;
    const gem = useSelector(selectUser).gem;
    const [anchorElGem, setAnchorElGem] = useState(null);
    const [anchorElHeart, setAnchorElHeart] = useState(null);

    const handleOpenGem = (event) => {
        setAnchorElGem(event.currentTarget);
    };

    const handleCloseGem = () => {
        setAnchorElGem(null);
    };

    const handleOpenHeart = (event) => {
        setAnchorElHeart(event.currentTarget);
    }

    const handleCloseHeart = () => {
        setAnchorElHeart(null);
    }

    return (
        <div className='lg:grid lg:grid-cols-9 lg:gap-4 ' >
            {/* LEFT BAR */}
            <div className='hidden lg:block lg:col-span-2 h-screen w-full' >
                <Stack spacing={4} p={3}>
                    <Typography textAlign={'left'} variant='h4' color='primary'>Duolingo</Typography>
                    <Link className='flex justify-start' to='/home'><Button sx={{ justifyContent: 'flex-start' }} size='large' startIcon={<HomeIcon />} variant='text' color='primary'>Học</Button></Link>
                    <Link className='flex justify-start' to='/speaking'><Button sx={{ justifyContent: 'flex-start' }} size='large' startIcon={<RecordVoiceOverIcon />} variant='text' color='primary'>Nói</Button></Link>
                    <Link className='flex justify-start' to='/rank'><Button sx={{ justifyContent: 'flex-start' }} size='large' startIcon={<LocalFireDepartmentIcon />} variant='text' color='primary'>Xếp hạng</Button></Link>
                    <Link className='flex justify-start' to='/mission'><Button sx={{ justifyContent: 'flex-start' }} size='large' startIcon={<StickyNote2Icon />} variant='text' color='primary'>Nhiệm vụ</Button></Link>
                    <Link className='flex justify-start' to='/profile'><Button sx={{ justifyContent: 'flex-start' }} size='large' startIcon={<PersonIcon />} variant='text' color='primary'>Hồ sơ</Button></Link>
                    <Button sx={{ justifyContent: 'flex-start' }} size='large' startIcon={<LogoutIcon />} variant='text' color='primary'>Đăng xuất</Button>
                </Stack>
            </div>
            {/* CENTER */}
            <div className='lg:col-span-4 h-screen w-full' >
                {children}
            </div>
            {/* RIGHT BAR */}
            <div className='hidden lg:block lg:col-span-3 h-screen w-full pr-5 pb-5' >
                <Stack spacing={2} justifyContent={'center'} alignItems={'center'} >
                    <Stack spacing={2} direction={'row'} className='w-full' justifyContent={'space-between'} alignItems={'center'} >
                        <IconButton
                            color='primary'
                            size='large'>
                            <LanguageIcon />
                        </IconButton>
                        <IconButton color='primary' size='large'>
                            <WhatshotIcon />
                        </IconButton>
                        <Button
                            size='large'
                            startIcon={<DiamondIcon />}
                            variant='text'
                            color='primary'
                            aria-controls="gem-menu"
                            aria-haspopup="true"
                            onClick={handleOpenGem}
                        >{gem}</Button>
                        <Menu
                            id="gem-menu"
                            anchorEl={anchorElGem}
                            open={Boolean(anchorElGem)}
                            onClose={handleCloseGem}
                        >
                            <MenuItem onClick={handleCloseGem} className='flex items-center gap-5 '>
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.5483 6.21094H35.5276C34.0182 6.21094 32.7947 7.43451 32.7947 8.94386V12.5877C32.7947 14.0971 34.0182 15.3207 35.5276 15.3207H45.5483C47.0576 15.3207 48.2812 14.0971 48.2812 12.5877V8.94386C48.2812 7.43451 47.0576 6.21094 45.5483 6.21094Z" fill="#FFBC00" /><path d="M66.501 9.85449H13.6646C12.1552 9.85449 10.9316 11.0781 10.9316 12.5874V16.2313C10.9316 17.7407 12.1552 18.9642 13.6646 18.9642H66.501C68.0103 18.9642 69.2339 17.7407 69.2339 16.2313V12.5874C69.2339 11.0781 68.0103 9.85449 66.501 9.85449Z" fill="#FFBC00" /><path d="M13.2405 13.499H66.0133C67.7918 13.499 69.2335 14.9408 69.2335 16.7193V43.9848C69.2335 45.7633 67.7918 47.205 66.0133 47.205H13.2405C11.462 47.205 10.0203 45.7633 10.0203 43.9848V16.7193C10.0203 14.9408 11.462 13.499 13.2405 13.499Z" fill="#AA572A" /><path d="M14.3142 17.793V42.9116H64.9401V17.793H14.3142Z" fill="#90461F" /><path fill-rule="evenodd" clip-rule="evenodd" d="M43.7736 31.4531L52.3516 29.0322C53.5066 28.7062 54.7474 29.0387 55.5847 29.8985L61.8034 36.2842C62.6083 37.1106 62.9185 38.2998 62.6199 39.4141L59.7661 50.0647C59.4675 51.179 58.6043 52.0538 57.494 52.3671L48.9156 54.7879C47.7606 55.1138 46.5198 54.7814 45.6825 53.9216L39.4642 47.536C38.6593 46.7095 38.3491 45.5204 38.6477 44.4061L41.5015 33.7554C41.8001 32.6412 42.6633 31.7664 43.7736 31.4531Z" fill="#00A1EE" /><path fill-rule="evenodd" clip-rule="evenodd" d="M39.0713 25.0551L30.6317 22.1886C29.4953 21.8026 28.2389 22.0697 27.3577 22.8845L20.8133 28.936C19.9663 29.7192 19.5943 30.8905 19.8341 32.0189L22.1266 42.8042C22.3664 43.9326 23.1827 44.8514 24.2751 45.2224L32.715 48.0888C33.8514 48.4748 35.1079 48.2077 35.9891 47.3929L42.5331 41.3415C43.38 40.5583 43.752 39.387 43.5122 38.2586L41.2197 27.4732C40.9798 26.3448 40.1636 25.4261 39.0713 25.0551Z" fill="#1CB0F6" /><path fill-rule="evenodd" clip-rule="evenodd" d="M29.5043 25.5275C29.4647 25.3411 29.3747 25.1691 29.2442 25.0302C28.8497 24.6101 28.1894 24.5895 27.7694 24.984L22.5636 29.8736C22.423 30.0057 22.3218 30.1742 22.2711 30.3604C22.12 30.9165 22.4482 31.4898 23.0043 31.641L29.6324 33.4427C29.7925 33.4863 29.9607 33.491 30.123 33.4565C30.6866 33.3367 31.0464 32.7826 30.9266 32.219L29.5043 25.5275Z" fill="#82DEFF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M42.3454 37.631L33.4466 38.1348C32.2484 38.2026 31.1834 38.9209 30.6716 40.0064L26.8707 48.0689C26.3788 49.1123 26.4726 50.3377 27.1177 51.2941L33.2835 60.4353C33.9286 61.3917 35.0296 61.9378 36.1814 61.8725L45.0806 61.3686C46.2788 61.3008 47.3438 60.5824 47.8555 59.4969L51.6561 51.4347C52.148 50.3913 52.0542 49.1659 51.4091 48.2095L45.2432 39.0683C44.5981 38.1119 43.4972 37.5658 42.3454 37.631Z" fill="#00A1EE" /><path fill-rule="evenodd" clip-rule="evenodd" d="M51.1866 34.8986L60.0854 35.4023C61.2836 35.4702 62.3486 36.1885 62.8603 37.274L66.6613 45.3364C67.1532 46.3799 67.0594 47.6053 66.4143 48.5617L60.2485 57.7029C59.6034 58.6593 58.5024 59.2053 57.3506 59.1401L48.4514 58.6362C47.2532 58.5683 46.1882 57.85 45.6765 56.7645L41.8759 48.7023C41.384 47.6588 41.4778 46.4335 42.1229 45.4771L48.2888 36.3358C48.9338 35.3795 50.0348 34.8334 51.1866 34.8986Z" fill="#1CB0F6" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59.6265 39.198L55.8011 44.8694C55.4788 45.3471 54.8304 45.4732 54.3526 45.151C54.2151 45.0582 54.1016 44.9339 54.0217 44.7885L50.7135 38.769C50.436 38.264 50.6204 37.6297 51.1254 37.3521C51.2945 37.2592 51.486 37.215 51.6787 37.2244L58.8123 37.5725C59.3879 37.6005 59.8317 38.0899 59.8036 38.6654C59.7943 38.8558 59.733 39.04 59.6265 39.198Z" fill="#82DEFF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27.9014 35.5374L19.0832 36.0055C17.8765 36.0696 16.8034 36.7934 16.2919 37.8882L12.5542 45.8892C12.0676 46.9307 12.1633 48.1511 12.8061 49.1041L18.9804 58.2579C19.6232 59.2109 20.7189 59.7567 21.8668 59.6957L30.6853 59.2274C31.892 59.1633 32.9652 58.4394 33.4766 57.3446L37.214 49.3439C37.7005 48.3024 37.6049 47.0821 36.9621 46.1291L30.7877 36.9753C30.1449 36.0223 29.0493 35.4765 27.9014 35.5374Z" fill="#27BAFF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M17.2155 39.312C17.1273 39.1608 17.0785 38.9899 17.0737 38.815C17.0576 38.239 17.5116 37.7591 18.0876 37.743L20.5282 37.6752C21.0172 37.6616 21.45 37.9896 21.5692 38.4641L23.4415 45.9204C23.5545 46.3707 23.3565 46.8415 22.9555 47.0756C22.4579 47.3661 21.819 47.1981 21.5285 46.7005L17.2155 39.312Z" fill="#50D1FF" /><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9316 46.2939H68.3229V80H10.9316V46.2939Z" fill="#AA572A" /><path d="M16.9324 68.6123H58.6777" stroke="#904821" stroke-width="2.36152" stroke-linecap="square" /><path d="M16.9324 55.8594H58.6777" stroke="#904821" stroke-width="2.36152" stroke-linecap="square" /><path fill-rule="evenodd" clip-rule="evenodd" d="M58.3023 73.6231V48.4408C58.3023 47.2551 59.2634 46.2939 60.4491 46.2939H68.909C70.0947 46.2939 71.0559 47.2551 71.0559 48.4408V77.8531C71.0559 79.0388 70.0947 80 68.909 80H10.3456C9.1599 80 8.19873 79.0388 8.19873 77.8531V48.4408C8.19873 47.2551 9.1599 46.2939 10.3456 46.2939H18.8055C19.9912 46.2939 20.9524 47.2551 20.9524 48.4408V73.6231H58.3023Z" fill="#FFBC00" /><path d="M46.1343 43.5605H33.1195C31.9338 43.5605 30.9727 44.5217 30.9727 45.7074V62.3661C30.9727 63.5518 31.9338 64.5129 33.1195 64.5129H46.1343C47.32 64.5129 48.2811 63.5518 48.2811 62.3661V45.7074C48.2811 44.5217 47.32 43.5605 46.1343 43.5605Z" fill="#FFBC00" /><path fill-rule="evenodd" clip-rule="evenodd" d="M37.1745 54.8631C36.1747 54.0878 35.5276 52.8504 35.5276 51.4563C35.5276 49.1084 37.3629 47.2051 39.627 47.2051C41.891 47.2051 43.7263 49.1084 43.7263 51.4563C43.7263 52.8785 43.0529 54.1375 42.0188 54.9093L43.0686 57.9016C43.3512 58.707 42.9274 59.589 42.122 59.8715C41.9576 59.9292 41.7846 59.9587 41.6103 59.9587H37.5667C36.7131 59.9587 36.0212 59.2668 36.0212 58.4132C36.0212 58.239 36.0507 58.066 36.1084 57.9016L37.1745 54.8631Z" fill="#DB8500" /><path d="M65.1344 75.4445C66.3922 75.4445 67.4118 74.4249 67.4118 73.1671C67.4118 71.9093 66.3922 70.8896 65.1344 70.8896C63.8766 70.8896 62.8569 71.9093 62.8569 73.1671C62.8569 74.4249 63.8766 75.4445 65.1344 75.4445Z" fill="#F8A201" /><path fill-rule="evenodd" clip-rule="evenodd" d="M71.0557 62.1647L55.6633 77.5571L55.6627 77.5564L53.2192 80H10.3454C10.2089 80 10.0753 79.9872 9.9458 79.9628L20.9522 68.9564V73.6231H58.3021V48.4408C58.3021 47.2551 59.2633 46.2939 60.449 46.2939H68.9089C70.0946 46.2939 71.0557 47.2551 71.0557 48.4408V62.1647Z" fill="#FFD300" /><path d="M65.1344 54.4924C66.3922 54.4924 67.4118 53.4727 67.4118 52.2149C67.4118 50.9571 66.3922 49.9375 65.1344 49.9375C63.8766 49.9375 62.8569 50.9571 62.8569 52.2149C62.8569 53.4727 63.8766 54.4924 65.1344 54.4924Z" fill="#F8A201" /><path fill-rule="evenodd" clip-rule="evenodd" d="M8.19873 61.2851V48.4408C8.19873 47.2551 9.1599 46.2939 10.3456 46.2939H18.8055C19.9912 46.2939 20.9524 47.2551 20.9524 48.4408V48.5314L8.19873 61.2851Z" fill="#FFD300" /><path d="M15.0306 54.4924C16.2884 54.4924 17.308 53.4727 17.308 52.2149C17.308 50.9571 16.2884 49.9375 15.0306 49.9375C13.7728 49.9375 12.7532 50.9571 12.7532 52.2149C12.7532 53.4727 13.7728 54.4924 15.0306 54.4924Z" fill="#F8A201" /><path d="M15.0306 75.4445C16.2884 75.4445 17.308 74.4249 17.308 73.1671C17.308 71.9093 16.2884 70.8896 15.0306 70.8896C13.7728 70.8896 12.7532 71.9093 12.7532 73.1671C12.7532 74.4249 13.7728 75.4445 15.0306 75.4445Z" fill="#F8A201" /></svg>
                                <Stack>
                                    <Typography variant='h6' color='primary'>Kim Cương</Typography>
                                    <Typography variant='h6' color='primary'>Bạn có {gem}</Typography>
                                    <Link to='/store'><Button variant='text' color='primary'>Mua thêm</Button></Link>
                                </Stack>
                            </MenuItem>
                        </Menu>
                        <Button
                            size='large'
                            startIcon={<FavoriteIcon />}
                            variant='text'
                            color='primary'
                            aria-controls="heart-menu"
                            aria-haspopup="true"
                            onClick={handleOpenHeart}>{heart}</Button>
                        <Menu
                            id="gem-menu"
                            anchorEl={anchorElHeart}
                            open={Boolean(anchorElHeart)}
                            onClose={handleCloseHeart}
                        >
                            <MenuItem onClick={handleCloseHeart} className='flex items-center gap-5 '>
                                <Stack
                                    pt={1}
                                    pb={1}
                                    pl={3}
                                    pr={3}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    spacing={3}
                                >
                                    <Typography variant='h6' color='primary'>Bạn có {heart} trái tim</Typography>
                                    <Rating name="read-only" value={heart} sx={{ color: 'red' }} icon={<FavoriteIcon />} readOnly />
                                    <Typography variant='h6' color='primary' >Tiếp tục học</Typography>
                                    <Button variant='outlined' color='primary' fullWidth startIcon={<AllInclusiveIcon />} >Vô hạn trái tim</Button>
                                    <Button variant='outlined' color='primary' fullWidth startIcon={<FavoriteIcon />} >Phục hồi</Button>
                                    <Button variant='outlined' color='primary' fullWidth startIcon={<MenuBookIcon />} >Luyện tập để phục hồi trái tim</Button>
                                </Stack>
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Stack>
                <Paper elevation={3} className='w-full h-1/2 mt-5' >
                    <Typography variant='h6' color='primary'>Author: Nguyễn Huy Hiếu</Typography>
                </Paper>
                <Paper elevation={3} className='w-full h-1/2 mt-5' >
                    <Typography variant='h6' color='primary'>Author: Nguyễn Huy Sơn</Typography>
                </Paper>
                <Paper elevation={3} className='w-full h-1/2 mt-5' >
                    <Typography variant='h6' color='primary'>Author: Ngọc Xuân Hội</Typography>
                </Paper>
            </div>
        </div>
    )
}

export default LayOut