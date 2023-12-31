import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import { AppBar, IconButton, Typography } from '@mui/material';



type NavListType = {
    route: string,
    text: string,
    Icon: React.ReactElement,
    RouteComponent: React.ReactElement,
}[]

type NavConfig = {
    MainBgColor?: string,
    HeaderBgColor?: string,
    HeaderFontColor?: string,
    DrawerFontColor?: string,
    DrawerBgColor?: string,
    ListHoverColor?: string,
    ListFontColor?: string,
    ListIconsColor?: string,
    HeaderHeight?: string | number,
    DrawerWidth?: string | number,
    LogoStyle?: React.CSSProperties,
    LogoParentStyle?: React.CSSProperties,
}


type Props = {
    window?: () => Window;
    NavListArray: NavListType,
    CompPathName: string,
    Logo: React.ReactElement | string,
    NavConfig?: NavConfig,
}
export default function ResponsiveDrawer(props: Props) {

    const { window, Logo, NavListArray, NavConfig, CompPathName } = props;
    let LogoParentStyle = NavConfig?.LogoParentStyle ?? {}
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const Navigate = useNavigate()
    const drawerWidth = NavConfig ? (NavConfig.DrawerWidth ?? 260) : 260;
    const appbarHeight = NavConfig ? (NavConfig.HeaderHeight ?? "60px") : "60px"
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
    React.useEffect(() => { location.pathname === `${CompPathName}` ? Navigate(`${NavListArray[0].route}`) : null }, [])
    const drawer = (
        <div>
            <Toolbar>
                <div style={{ height: 100, overflow: "hidden", width: "100%", objectFit: "cover", objectPosition: "center", ...LogoParentStyle }} className="d-flex align-items-center justfy-content-center flex-column">
                    {typeof Logo !== "string" ? Logo : <img style={(NavConfig?.LogoStyle)} src={Logo} />}
                </div>
            </Toolbar>
            <Divider />
            <List>{NavListArray.map((Obj, index) => (
                <NavLink to={`${Obj.route}`} key={index}>
                    <ListItem sx={{
                        "& .css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root:hover": {
                            color: NavConfig?.ListFontColor ?? "#757575",
                            background: NavConfig?.ListHoverColor ?? "#0000000a",
                        }
                    }}
                        disablePadding
                    // onClick={() => { Navigate(`${Obj.route}`)}}
                    >
                        <ListItemButton>
                            <ListItemIcon sx={{
                                justifyContent: "center",
                                color: NavConfig?.ListIconsColor ?? NavConfig?.ListFontColor ?? "#757575",
                            }} >

                                {Obj.Icon && Obj.Icon}
                            </ListItemIcon>
                            <ListItemText primary={Obj.text} sx={{
                                color: NavConfig?.ListFontColor ?? NavConfig?.ListIconsColor ?? "#757575",
                            }} />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            ))}
            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{
            display: 'flex',
            background: NavConfig?.MainBgColor ?? "#F3F2F7",
            flexDiraction: { sm: "column", md: "row" }
        }}>
            <CssBaseline />


            <AppBar
                position="fixed"
                sx={{
                    display: { md: 'none' },
                    color: NavConfig?.HeaderFontColor ?? NavConfig?.DrawerFontColor ?? "#000",
                    background: NavConfig?.HeaderBgColor ?? NavConfig?.DrawerBgColor ?? "#FFF",
                    height: appbarHeight,
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">{Logo ?? "LOGO"}</Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{
                    "& .MuiDrawer-paper": {
                    },
                    width: { sm: 0, md: drawerWidth },
                    flexShrink: { sm: 0 }
                }}
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
                        display: { sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            color: NavConfig?.DrawerFontColor ?? NavConfig?.HeaderFontColor ?? "#000",
                            background:NavConfig?.DrawerBgColor ?? NavConfig?.HeaderBgColor ?? "#FFF",
                            boxSizing: 'border-box', width: drawerWidth
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { sm: 'none', md: 'block', xs: "none" },
                        '& ::-webkit-scrollbar': { width: 0, height: 0 },
                        '& .MuiDrawer-paper': {
                            color: NavConfig?.DrawerFontColor ?? NavConfig?.HeaderFontColor ?? "#000",
                            background: NavConfig?.DrawerBgColor ?? NavConfig?.HeaderBgColor ?? "#FFF",
                            boxSizing: 'border-box', width: drawerWidth
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1, p: 3,
                    marginTop: { sm: appbarHeight, xs: appbarHeight, md: 0 },
                    backgound: NavConfig?.MainBgColor ?? "#F3F2F7",
                    minHeight: { md: "100vh", sm: `calc(100vh - ${appbarHeight})`, xs: `calc(100vh - ${appbarHeight})` },
                    width: { sm: 100, md: `calc(100% - ${drawerWidth}px)` }
                }}
            >
                {
                    <Routes>
                        {NavListArray.map((x: any, i: number) => <Route key={i} path={`${x.route}`} element={x.RouteComponent} />)}
                    </Routes>
                }
                <Toolbar />
            </Box>
        </Box>
    );
}
