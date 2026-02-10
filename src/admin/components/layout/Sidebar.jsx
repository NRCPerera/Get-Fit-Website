/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Dumbbell,
    ClipboardList,
    CreditCard,
    UserCheck,
    BarChart,
    Bell,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Home
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../utils';
import { motion } from 'framer-motion';
import './Sidebar.css';

const SidebarLink = ({ to, icon: Icon, label, collapsed }) => (
    <NavLink
        to={to}
        end={to === '/admin'}
        className={({ isActive }) =>
            cn("admin-sidebar-link", isActive && "active")
        }
    >
        <Icon size={22} className="shrink-0" />
        {!collapsed && (
            <span className="admin-sidebar-link-text">
                {label}
            </span>
        )}
        {collapsed && (
            <div className="admin-tooltip">
                {label}
            </div>
        )}
    </NavLink>
);

const Sidebar = () => {
    const { logout } = useAuth();
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <motion.aside
            initial={{ width: 280 }}
            animate={{ width: collapsed ? 80 : 280 }}
            className="admin-sidebar"
        >
            <div className="admin-sidebar-header">
                {!collapsed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="admin-sidebar-logo"
                    >
                        <div className="admin-logo-icon">
                            <Dumbbell size={20} />
                        </div>
                        <span className="admin-logo-text">
                            GetFit Admin
                        </span>
                    </motion.div>
                )}
                {collapsed && (
                    <div style={{ margin: '0 auto' }} className="admin-logo-icon">
                        <Dumbbell size={20} />
                    </div>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="admin-collapse-btn"
                >
                    {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                </button>
            </div>

            <nav className="admin-sidebar-nav">
                <SidebarLink to="/admin" icon={LayoutDashboard} label="Dashboard" collapsed={collapsed} />
                <SidebarLink to="/admin/users" icon={Users} label="Users & Instructors" collapsed={collapsed} />
                <SidebarLink to="/admin/exercises" icon={Dumbbell} label="Exercises" collapsed={collapsed} />
                <SidebarLink to="/admin/workouts" icon={ClipboardList} label="Workouts" collapsed={collapsed} />
                <SidebarLink to="/admin/payments" icon={CreditCard} label="Payments" collapsed={collapsed} />
                <SidebarLink to="/admin/allocations" icon={UserCheck} label="Allocations" collapsed={collapsed} />
                <SidebarLink to="/admin/analytics" icon={BarChart} label="Analytics" collapsed={collapsed} />
                <SidebarLink to="/admin/notifications" icon={Bell} label="Notifications" collapsed={collapsed} />
            </nav>

            <div className="admin-sidebar-footer">
                <Link to="/" className={cn("admin-home-btn", collapsed && "collapsed")}>
                    <Home size={22} className="shrink-0" />
                    {!collapsed && <span>Back to Website</span>}
                </Link>
                <button
                    onClick={logout}
                    className={cn("admin-logout-btn", collapsed && "collapsed")}
                >
                    <LogOut size={22} className="shrink-0" />
                    {!collapsed && <span>Logout</span>}
                </button>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
