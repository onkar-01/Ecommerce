import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import { logout } from "../slices/authSlice";
import { toast, Toaster } from "react-hot-toast";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { HiShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { setSearchKeyword } from "../slices/searchSlice";
import {
  Image,
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { MdRestaurantMenu, MdOutlineInventory } from "react-icons/md";

const SidebarContent = ({ onClose, ...rest }) => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const isVendor = userInfo.role === "vendor";

  const linkItems = isVendor
    ? [
        { name: "Dashboard", icon: FiHome, href: "/dashboard" },
        { name: "Inventory", icon: MdOutlineInventory, href: "/inventory" },
        { name: "Active Order", icon: FiCompass, href: "/active-order" },
        { name: "Previous Order", icon: FiStar, href: "/previous-order" },
        { name: "Settings", icon: FiSettings, href: "/profile" },
      ]
    : [
        { name: "Home", icon: FiHome, href: "/" },
        { name: "Active Order", icon: FiCompass, href: "/active-order" },
        { name: "Previous Order", icon: FiStar, href: "/previous-order" },
        { name: "User", icon: FiSettings, href: "/profile" },
      ];

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Image h={10} src="/logo.png" />
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {linkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, href, children, ...rest }) => {
  return (
    <Link to={href}>
      <Box
        as="a"
        href="#"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#ff742e",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const vendorId = useSelector((state) => state.vendor.vendorId);
  console.log(vendorId);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signoutHandler = async () => {
    try {
      await fetch("/api/v1/logout", {
        method: "GET",
      });
      dispatch(logout());
      navigate("/auth/login");
      return null;
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  const location = useLocation();
  const path = location.pathname;

  const pathmenu = path.search("/menu");
  let flag = false;
  if (pathmenu === -1) {
    flag = true;
  }

  const searchHandler = (e) => {
    console.log(e.target.value);
    dispatch(setSearchKeyword(e.target.value));
  };

  return (
    <div className="fixed w-screen z-10">
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        {flag ? (
          <>
            <Text
              display={{ base: "flex", md: "none" }}
              fontSize="2xl"
              fontFamily="monospace"
              fontWeight="bold"
            >
              <Image h={10} src="/logo.png" />
            </Text>
          </>
        ) : (
          <>
            <Text
              display={{ base: "flex", md: "none" }}
              fontSize="2xl"
              fontFamily="monospace"
              fontWeight="bold"
            >
              <Image h={10} src="/logo2.png" />
            </Text>
            <div className="relative flex  mr-6 my-2">
              <input
                type="text"
                className="bg-purple-white shadow rounded border-0 p-3"
                placeholder="Search by name..."
                onChange={(e) => {
                  searchHandler(e);
                }}
              />
              <div className=" pin-r pin-t mt-4 ml-[-25px] text-purple-lighter">
                <BiSearch />
              </div>
            </div>
          </>
        )}

        <HStack spacing={{ base: "0", md: "6" }}>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar size={"sm"} src={userInfo.avatar.url} />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm" className="capitalize">
                      {userInfo.name}
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      {userInfo.role}
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Billing</MenuItem>
                <MenuDivider />
                <MenuItem onClick={signoutHandler}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          {cartItems.length > 0 && (
            <Link to={`/vendor/${vendorId}/cart`}>
              <div className="cart-button bg-[#ff742e] rounded-full ml-1 pt-[5px] w-10 h-10 justify-item-center justify-center">
                <HiShoppingBag size={24} color="white" className="m-auto" />
                <p className="text-[9px] w-3 rounded-full text-center bg-white mt-[-8px] ml-auto mr-auto">
                  {cartItems.length}
                </p>
              </div>
            </Link>
          )}
        </HStack>
      </Flex>
    </div>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;
  const userInfo = useSelector((state) => state.auth.userInfo);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Box minH="100vh" bg={useColorModeValue("#fff", "#fff")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet />
      </Box>
    </Box>
  );
};

export default SidebarWithHeader;
