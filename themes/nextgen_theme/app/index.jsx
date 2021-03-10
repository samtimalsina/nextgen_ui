import React from 'react';
import HeaderContainer from './HeaderContainer';
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  SideNavItems,
} from 'carbon-components-react';

const App = (props) => {
  const { 
    isSideNavExpanded, 
    onClickSideNavExpand,
    headerLinks,
    sidebarLinks,
  } = props;

  return (
    <HeaderContainer>
      <Header aria-label="NextGen UI">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="#" prefix="Nextgen"> UI</HeaderName>
        <HeaderNavigation aria-label="Nextgen UI">
          { headerLinks.map(headerLink => (
            <HeaderMenuItem href={headerLink.url}>
              { headerLink.label}
            </HeaderMenuItem>  
          ))}
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              { sidebarLinks.map(sidebarLink => (
                <HeaderMenuItem href={sidebarLink.url}>
                  { sidebarLink.label}
                </HeaderMenuItem>  
              ))}
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
      </Header>
    </HeaderContainer>
  );
}

export default App;
