import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
const Sidebar = ({ sidebarVisible, toggleSidebar }) => {
  const [activeLink, setActiveLink] = useState("Dashboard"); // Default active link is Dashboard
  const [isPurchaseDropdownOpen, setIsPurchaseDropdownOpen] = useState(false); // Manage Purchase dropdown state
  const [isSalesDropdownOpen, setIsSalesDropdownOpen] = useState(false); // Manage Purchase dropdown state

  // Handle link click and set active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // Toggle dropdown open/close for "Purchase" section
  const togglePurchaseDropdown = () => {
    setIsPurchaseDropdownOpen(!isPurchaseDropdownOpen);
  };

  const toggleSalesDropdown = () => {
    setIsSalesDropdownOpen(!isSalesDropdownOpen);
  };
  useEffect(() => {
    // Optional: Handle any side-effects when sidebar visibility changes
  }, [sidebarVisible]);

  return (
    <section id="sidebar" className={sidebarVisible ? "" : "hide"}>
      {/* Sidebar Logo and Toggle Button for Mobile */}
      <div className="sidebar-header">
        <a href="#" className="brand">
          <i className="bx bxs-smile"></i>
          <span className="text">AdminHub</span>
        </a>
      </div>

      {/* Sidebar menu */}
      <ul className="side-menu top">
        <li className={activeLink === "Dashboard" ? "active" : ""}>
          <Link to="/" onClick={() => handleLinkClick("Dashboard")}>
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </Link>
        </li>

        {/* Purchase dropdown button */}
        <li className={isPurchaseDropdownOpen ? "drop-active" : ""}>
          <div
            className={`dropdown-link ${
              isPurchaseDropdownOpen ? "drop-active" : ""
            }`}
            onClick={togglePurchaseDropdown}
          >
            <span className="icon">
              {" "}
              <i className="bx bxs-cart"></i>
            </span>
            <span className="drop">Purchase</span>
            <i
              className={`bx bx-chevron-${
                isPurchaseDropdownOpen ? "up" : "down"
              } ml-auto`}
            ></i>
          </div>

          {/* Dropdown Menu */}
          {isPurchaseDropdownOpen && (
            <ul>
              <li>
                <Link to="/purchase" onClick={() => handleLinkClick('Orders')}>
                <i className="bx bxs-cart"></i>
                  <span className="drop">Purchase Order</span>
                </Link>
              </li>
              <li>
                <Link to="/suppliers" onClick={() => handleLinkClick('Suppliers')}>
                <i className="bx bxs-cart"></i>
                  <span className="drop">Suppliers</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className={activeLink === "Inventory" ? "active" : ""}>
          <Link to="/inventory" onClick={() => handleLinkClick("Inventory")}>
            <i className="bx bxs-package"></i>
            <span className="text">Inventory</span>
          </Link>
        </li>

        <li className={isSalesDropdownOpen ? "drop-active" : ""}>
          <div
            className={`dropdown-link ${
              isSalesDropdownOpen ? "drop-active" : ""
            }`}
            onClick={toggleSalesDropdown}
          >
            <span className="icon">
              {" "}
              <i className="bx bxs-cart"></i>
            </span>
            <span className="drop">Sales</span>
            <i
              className={`bx bx-chevron-${
                isSalesDropdownOpen ? "up" : "down"
              } ml-auto`}
            ></i>
          </div>

          {/* Dropdown Menu */}
          {isSalesDropdownOpen && (
            <ul>
              <li>
                <Link to="/orders" onClick={() => handleLinkClick("Orders")}>
                  <i className="bx bxs-cart"></i>
                  <span className="text">Customer</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/suppliers"
                  onClick={() => handleLinkClick("Suppliers")}
                >
                  <i className="bx bxs-cart"></i>
                  <span className="text">Sales Return</span>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={activeLink === "Report" ? "active" : ""}>
          <Link to="/report" onClick={() => handleLinkClick("Report")}>
            <i className="bx bxs-file"></i>
            <span className="text">Report</span>
          </Link>
        </li>
      </ul>

      {/* Additional menu items */}
      <ul className="side-menu">
        <li>
          <Link to="/settings">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </Link>
        </li>
        <li>
          <Link to="/account">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Account</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
