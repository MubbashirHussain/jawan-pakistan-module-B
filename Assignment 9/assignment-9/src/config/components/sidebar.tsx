import * as React from 'react';
import "../../App.css"
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import { Routes, Route, Link } from "react-router-dom";
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deshboard from '../pages/admin/component/deshboard';
import Order from '../pages/admin/component/order';
import Customer from '../pages/admin/component/customer';
import Analytics from '../pages/admin/component/analytics';
import Reviews from '../pages/admin/component/review';
import Foods from '../pages/admin/component/food';
import FoodsDetail from '../pages/admin/component/foodsDetails';
import CCalender from '../pages/admin/component/calender';
import Chat from '../pages/admin/component/chat';
import Wallet from '../pages/admin/component/wallet';

const drawerWidth = 260;

interface Props {
    window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
    // const Navigate = useNavigate()
    let NavigationBTNsARR: any[] = [
        { Route: "dashboard", text: "Dashboard", Icon: <HomeOutlinedIcon /> },
        { Route: "order", text: "Order List", Icon: <SubjectOutlinedIcon /> },
        { Route: "customer", text: "Customer", Icon: <PeopleOutlineOutlinedIcon /> },
        { Route: "analytics", text: "Analytics", Icon: <InsertChartOutlinedRoundedIcon /> },
        { Route: "reviews", text: "Reviews", Icon: <CreateOutlinedIcon /> },
        { Route: "foods", text: "Foods", Icon: <FreeBreakfastOutlinedIcon /> },
        { Route: "foodsdetal", text: "Foods Detail", Icon: <EditNoteOutlinedIcon /> },
        { Route: "Customerdetail", text: "Customer Detail", Icon: <PersonOutlineOutlinedIcon /> },
        { Route: "calender", text: "Calender", Icon: <CalendarMonthOutlinedIcon /> },
        { Route: "chat", text: "Chat", Icon: <SmsOutlinedIcon /> },
        { Route: "wallet", text: "Wallet", Icon: <WalletOutlinedIcon /> },
    ]

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <div className="d-flex align-items-center flex-column">
                <h1 className="fw-bolder py-3">Sedap<span style={{ color: "#00B074" }}>.</span>  </h1>
                <p className="text-muted" style={{ fontSize: "0.6rem" }}>Modren Admin DashBoard</p>
            </div>
            <Divider />
            <List>
                {NavigationBTNsARR.map((Obj, index) => (
                    <Link className="ResetLinks" to={Obj.Route} key={index}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon >
                                    {Obj.Icon ? Obj.Icon : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={Obj.text} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' ,background: "#F3F2F7" }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& ::-webkit-scrollbar': { width: 0, height: 0 },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ backgound: "#F3F2F7", flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {
                    <Routes>
                        <Route path='dashboard' element={<Deshboard />}></Route>
                        <Route path='order' element={<Order />}></Route>
                        <Route path='customer' element={<Customer />}></Route>
                        <Route path='analytics' element={<Analytics />}></Route>
                        <Route path='reviews' element={<Reviews />}></Route>
                        <Route path='foods' element={<Foods />}></Route>
                        <Route path='foodsdetal' element={<FoodsDetail />}></Route>
                        <Route path='Customerdetail' element={<Customer />}></Route>
                        <Route path='calender' element={<CCalender />}></Route>
                        <Route path='chat' element={<Chat />}></Route>
                        <Route path='wallet' element={<Wallet />}></Route>
                    </Routes>
                }
                <Toolbar />
            </Box>
        </Box>
    );
}
