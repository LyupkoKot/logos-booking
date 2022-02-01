const SideBarIcon = ({ icon, text = 'tooltip 💡', handleClick }) => (
  <div className="sidebar-icon group" onClick={handleClick}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBarIcon;
