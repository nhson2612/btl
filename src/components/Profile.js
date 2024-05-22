import React, { useMemo, useState } from 'react'
import { selectUser } from '../redux/UserSlice'
import { useSelector } from 'react-redux'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import achievement1 from '../assets/achievement1.svg'
import achievement2 from '../assets/achievement2.svg'
import achievement3 from '../assets/achievement3.svg'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { OtherFakeUsers } from '../assets/fakeData'

const OtherUser = ({ user }) => {
    console.log(user);
    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' mt={2}>
            <Typography textAlign={'left'} variant='h6'>fafaf</Typography>
            <Avatar alt={user.username} src={user.avatar} />
            <Typography textAlign={'left'} variant='h6'>{user.username}</Typography>
        </Stack>
    )
}

const Profile = () => {
    const [value, setValue] = useState('1');
    const user = useSelector(selectUser)
    const flowers = () => {
        let flowers = OtherFakeUsers.filter(user => user.flowers.includes(user.id))
        return flowers
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [year, month, day] = user.dateJoined.split('-');
    console.log(flowers);

    return (
        <Stack p={2} className='' >
            <img src={user.avatar} alt={'avt'} className='w-[592px] h-[224px] object-fill mb-5 rounded-lg' />
            <Typography textAlign={'left'} variant='h4' className='text-center'>{user.name}</Typography>
            <Typography textAlign={'left'} variant='h6' className='text-center'>{user.username}</Typography>
            <Typography textAlign={'left'} variant='h6' className='text-center'>Đã tham gia vào tháng {month} ngày {day} năm {year} </Typography>
            <Stack direction='row' justifyContent='space-between' alignItems='center' mt={2}>
                <Typography className='text-blue-500' textAlign={'left'} variant='h6' >Flowers: {user.flowers.length}</Typography>
                <Typography className='text-blue-500' textAlign={'left'} variant='h6' >Flowers Received: {user.flowersReceived.length}</Typography>
            </Stack>
            <hr className='my-5 border-t-4' />
            <Box className='grid grid-cols-2 p-3 gap-2' >
                <Box className='flex items-center gap-4 border-solid border-2 border-gray-400 rounded-xl px-5 py-2'>
                    <svg width="24" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.0367 2.67272C13.8379 0.718003 11.3282 0.0455378 10.1787 1.63898L0.717665 14.7538C-0.157342 15.9667 0.452676 17.6801 1.89732 18.0672L7.2794 19.5093L8.07445 27.3273C8.27323 29.282 10.7829 29.9545 11.9324 28.361L21.3935 15.2462C22.2685 14.0333 21.6585 12.3199 20.2138 11.9328L14.8317 10.4907L14.0367 2.67272Z" fill="#FFD900" /><path d="M2.574 16.4882C2.08457 16.3561 2.03731 15.6803 2.50359 15.4813L6.24415 13.8853C6.58188 13.7412 6.96093 13.973 6.98654 14.3393L7.17226 16.9952C7.19787 17.3615 6.85477 17.6438 6.50027 17.5481L2.574 16.4882Z" fill="#F7C100" /><path d="M19.717 13.2505C20.2064 13.3826 20.2537 14.0584 19.7874 14.2573L16.0469 15.8533C15.7091 15.9974 15.3301 15.7656 15.3045 15.3993L15.1188 12.7435C15.0931 12.3772 15.4362 12.0949 15.7907 12.1906L19.717 13.2505Z" fill="#FFEF8F" /></svg>
                    <Stack>
                        <Typography textAlign={'left'} variant='h6'>{user.streak}</Typography>
                        <Typography variant='h6'>Ngày liên tiếp</Typography>
                    </Stack>
                </Box>
                <Box className='flex items-center gap-4 border-solid border-2 border-gray-400 rounded-xl px-5 py-2'>
                    <svg width="24" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.0367 2.67272C13.8379 0.718003 11.3282 0.0455378 10.1787 1.63898L0.717665 14.7538C-0.157342 15.9667 0.452676 17.6801 1.89732 18.0672L7.2794 19.5093L8.07445 27.3273C8.27323 29.282 10.7829 29.9545 11.9324 28.361L21.3935 15.2462C22.2685 14.0333 21.6585 12.3199 20.2138 11.9328L14.8317 10.4907L14.0367 2.67272Z" fill="#FFD900" /><path d="M2.574 16.4882C2.08457 16.3561 2.03731 15.6803 2.50359 15.4813L6.24415 13.8853C6.58188 13.7412 6.96093 13.973 6.98654 14.3393L7.17226 16.9952C7.19787 17.3615 6.85477 17.6438 6.50027 17.5481L2.574 16.4882Z" fill="#F7C100" /><path d="M19.717 13.2505C20.2064 13.3826 20.2537 14.0584 19.7874 14.2573L16.0469 15.8533C15.7091 15.9974 15.3301 15.7656 15.3045 15.3993L15.1188 12.7435C15.0931 12.3772 15.4362 12.0949 15.7907 12.1906L19.717 13.2505Z" fill="#FFEF8F" /></svg>
                    <Stack>
                        <Typography textAlign={'left'} variant='h6'>{user.exp}</Typography>
                        <Typography variant='h6'>Tổng EXP</Typography>
                    </Stack>
                </Box>
                <Box className='flex items-center gap-4 border-solid border-2 border-gray-400 rounded-xl px-5 py-2'>
                    <svg width="24" viewBox="0 0 53 64" xmlns="http://www.w3.org/2000/svg"><title>Ruby</title><g fill="none"><path d="M28.273 4.768l21.456 8.146a4.939 4.939 0 0 1 3.196 4.613v32.92a4.939 4.939 0 0 1-3.196 4.613l-21.456 8.146a4.998 4.998 0 0 1-3.546 0L3.27 55.06a4.939 4.939 0 0 1-3.196-4.613v-32.92a4.939 4.939 0 0 1 3.196-4.613l21.456-8.146a4.998 4.998 0 0 1 3.546 0z" fill="#E33535" /><path d="M32.118 6.228l17.611 6.686a4.939 4.939 0 0 1 3.196 4.613v4.936L15.417 59.671 3.27 55.061a4.939 4.939 0 0 1-3.196-4.614V38.014L32.118 6.228z" fill="#E64D4D" /><path d="M28.273.673L49.73 8.82a4.939 4.939 0 0 1 3.196 4.613v32.92a4.939 4.939 0 0 1-3.196 4.613l-21.456 8.146a4.998 4.998 0 0 1-3.546 0L3.27 50.965a4.939 4.939 0 0 1-3.196-4.613v-32.92A4.939 4.939 0 0 1 3.27 8.819L24.727.673a4.998 4.998 0 0 1 3.546 0z" fill="#FF4B4B" /><path d="M35.103 3.266L49.729 8.82a4.939 4.939 0 0 1 3.196 4.613v9.031L18.402 56.71 3.271 50.965a4.939 4.939 0 0 1-3.196-4.613v-8.338L35.103 3.266z" fill="#FF6060" /><path d="M26.5 6.14L5.872 13.973v31.84L26.5 53.644l20.628-7.832v-31.84L26.5 6.141zm23.237 2.682a4.916 4.916 0 0 1 3.188 4.587v32.966a4.916 4.916 0 0 1-3.188 4.587L28.28 59.108a5.02 5.02 0 0 1-3.562 0L3.263 50.962a4.916 4.916 0 0 1-3.188-4.587V13.41a4.916 4.916 0 0 1 3.188-4.587L24.72.676a5.02 5.02 0 0 1 3.562 0l21.456 8.146z" fill="#F77" /><path d="M5.872 32.264v13.548L22.88 52.27l-4.477 4.441-15.139-5.748a4.916 4.916 0 0 1-3.188-4.587v-8.36l5.797-5.751zm41.256-4.05V13.972L30.626 7.707l4.477-4.44 14.634 5.555a4.916 4.916 0 0 1 3.188 4.587v9.054l-5.797 5.75z" fill="#FF8787" /><path d="M25.223 19.742l3.282-3.282c2.996-2.996 7.942-2.908 11.047.197 3.105 3.105 3.193 8.05.197 11.047l-8.293 8.293a1.453 1.453 0 0 1-1.066.425l-4.227-.11a.298.298 0 0 0-.219.086.308.308 0 0 0 .008.436l1.82 1.82a.727.727 0 0 1 0 1.027l-1.467 1.467A3.2 3.2 0 0 1 23.38 42l-7.595-1.577-1.577-7.596a3.2 3.2 0 0 1 .853-2.924l6.486-6.486a.727.727 0 0 1 1.028 0l1.81 1.81a.308.308 0 0 0 .436.008.298.298 0 0 0 .087-.219l-.11-4.21c-.01-.398.143-.783.425-1.065z" fill="#CC2424" /><path d="M32.414 23.95L13.363 43" stroke="#AB1B15" strokeWidth="3" strokeLinecap="round" /></g></svg>
                    <Stack >
                        <Typography textAlign={'left'} variant='h6'>{user.gem}</Typography>
                        <Typography variant='h6'>Gem</Typography>
                    </Stack>
                </Box>
                <Box className='flex items-center gap-4 border-solid border-2 border-gray-400 rounded-xl px-5 py-2'>
                    <svg width="24" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82666 9.00208H16.6593V21.34C16.6593 22.3484 15.6622 23.0538 14.7113 22.718L9.24298 20.787L3.77461 22.718C2.82378 23.0538 1.82666 22.3484 1.82666 21.34V9.00208Z" fill="#CE9969" /><path d="M16.6094 14.679C13.6924 18.7474 8.02951 19.6808 3.96106 16.7638C-0.107377 13.8468 -1.04078 8.18393 1.87625 4.11548C4.79328 0.0470419 10.4561 -0.886362 14.5246 2.03067C18.593 4.9477 19.5264 10.6105 16.6094 14.679Z" fill="#FFD900" /><path d="M3.96106 16.7639C8.02951 19.6809 13.6924 18.7475 16.6094 14.6791L1.87625 4.1156C-1.04078 8.18404 -0.107377 13.8469 3.96106 16.7639Z" fill="#FFE346" /><path d="M14.9153 9.39721C14.9153 12.5301 12.3756 15.0699 9.24267 15.0699C6.10976 15.0699 3.57003 12.5301 3.57003 9.39721C3.57003 6.2643 6.10976 3.72457 9.24267 3.72457C12.3756 3.72457 14.9153 6.2643 14.9153 9.39721Z" stroke="#FFC700" strokeWidth="1.83928" /><path d="M11.4074 6.47638C11.122 6.19103 11.122 5.72839 11.4074 5.44304L12.7048 4.14565C12.9901 3.8603 13.4527 3.8603 13.7381 4.14565L15.0355 5.44304C15.3208 5.72839 15.3208 6.19103 15.0355 6.47638L13.7381 7.77376C13.4527 8.05911 12.9901 8.05911 12.7048 7.77376L11.4074 6.47638Z" fill="white" /></svg>
                    <Stack>
                        <Typography textAlign={'left'} variant='h6'>{user.numberOfTrophies}</Typography>
                        <Typography variant='h6'>Số lần đoạt top I</Typography>
                    </Stack>
                </Box>
            </Box>
            <hr className='my-5 border-t-4' />
            <Stack direction='row' justifyContent='space-between' alignItems='center' mt={2}>
                <Typography textAlign={'left'} variant='h6' >Thành tích</Typography>
                <Typography className='text-blue-500 cursor-pointer' textAlign={'left'} variant='h6' >Xem tất cả</Typography>
            </Stack>
            <List>
                <ListItem className='flex items-center gap-4'>
                    <List className='border-solid border-2 border-gray-400 rounded-lg' >
                        <ListItem className='flex items-center gap-5' >
                            <img src={achievement1} alt='achievement' />
                            <Stack spacing={1} >
                                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                                    <Typography textAlign={'left'} variant='h6'>Lửa rừng</Typography>
                                    <Typography textAlign={'left'} variant='h6'>{user.streak}/14</Typography>
                                </Stack>
                                <LinearProgress sx={{
                                    height: '14px',
                                    borderRadius: '20px',
                                    width: '400px',
                                    backgroundColor: '#e5e5e5',
                                    '.MuiLinearProgress-bar': {
                                        backgroundColor: 'yellow',
                                    },
                                }} variant="determinate" value={(user.streak / 14) * 100} />
                                <Typography textAlign={'left'} variant='h6'>Đạt chuỗi {user.streak} ngày streak</Typography>
                            </Stack>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem className='flex items-center gap-5' >
                            <img src={achievement2} alt='achievement' />
                            <Stack spacing={1} >
                                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                                    <Typography textAlign={'left'} variant='h6'>Cao nhân</Typography>
                                    <Typography textAlign={'left'} variant='h6'>{user.exp}/4000</Typography>
                                </Stack>
                                <LinearProgress sx={{
                                    height: '14px',
                                    borderRadius: '20px',
                                    width: '400px',
                                    backgroundColor: '#e5e5e5',
                                    '.MuiLinearProgress-bar': {
                                        backgroundColor: 'yellow',
                                    },
                                }} variant="determinate" value={(user.exp / 4000) * 100} />
                                <Typography textAlign={'left'} variant='h6'>Đạt được {user.streak} EXP</Typography>
                            </Stack>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem className='flex items-center gap-5' >
                            <img src={achievement3} alt='achievement' />
                            <Stack spacing={1} >
                                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                                    <Typography textAlign={'left'} variant='h6'>Học giả</Typography>
                                    <Typography textAlign={'left'} variant='h6'>{user.numberOfTrophies}/10</Typography>
                                </Stack>
                                <LinearProgress sx={{
                                    height: '14px',
                                    borderRadius: '20px',
                                    width: '400px',
                                    backgroundColor: '#e5e5e5',
                                    '.MuiLinearProgress-bar': {
                                        backgroundColor: 'yellow',
                                    },
                                }} variant="determinate" value={(user.numberOfTrophies / 10) * 100} />
                                <Typography textAlign={'left'} variant='h6'>Đã từng {user.numberOfTrophies} lần đứng top I</Typography>
                            </Stack>
                        </ListItem>
                    </List>
                </ListItem>
            </List>
            <hr className='my-5 border-t-4' />
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="ĐANG THEO DÕI" value="1" />
                        <Tab label="NGƯỜI THEO DÕI" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    {
                        flowers()?.map(user => {
                            console.log(flowers);
                            return (
                                <OtherUser user={user} />
                            )
                        })
                    }
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
        </Stack>
    )
}

export default Profile