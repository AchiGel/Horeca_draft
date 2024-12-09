import NavItem from "./NavItem";

export default function NavList() {
  return (
    <ul className="flex flex-col lg:flex-row gap-8">
      <NavItem to="/" label="მთავარი" />
      <NavItem to="/popular" label="პოპულარული" />
      <NavItem to="/trending" label="ტრენდული" />
    </ul>
  );
}
