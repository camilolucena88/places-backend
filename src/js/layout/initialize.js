"use strict";

// Initialization
KTUtil.ready(function() {
    ////////////////////////////////////////////////////
    // Layout Base Partials(mandatory for core layout)//
    ////////////////////////////////////////////////////

    // Init Aside
    if (typeof KTLayoutAside !== 'undefined') {
        KTLayoutAside.init('kt_aside');
    }

    // Init Aside Offcanvas
    if (typeof KTLayoutAsideOffcanvas !== 'undefined') {
        KTLayoutAsideOffcanvas.init('kt_aside_offcanvas');
    }

    // Init Aside Offcanvas Menu
    if (typeof KTLayoutAsideOffcanvasMenu !== 'undefined') {
        KTLayoutAsideOffcanvasMenu.init('kt_aside_offcanvas_menu');
    }

    // Init Sidebar
    if (typeof KTLayoutSidebar !== 'undefined') {
        KTLayoutSidebar.init('kt_sidebar');
    }

    // Init Content
    if (typeof KTLayoutContent !== 'undefined') {
        KTLayoutContent.init('kt_content');
    }

    // Init Subheader
    if (typeof KTLayoutSubheader !== 'undefined') {
        KTLayoutSubheader.init('kt_subheader');
    }

    // Init Footer
    if (typeof KTLayoutFooter !== 'undefined') {
        KTLayoutFooter.init('kt_footer');
    }


    //////////////////////////////////////////////
    // Layout Extended Partials(optional to use)//
    //////////////////////////////////////////////

    // Init Scrolltop
    if (typeof KTLayoutScrolltop !== 'undefined') {
        KTLayoutScrolltop.init('kt_scrolltop');
    }

    // Init Sticky Card
    if (typeof KTLayoutStickyCard !== 'undefined') {
        KTLayoutStickyCard.init('kt_page_sticky_card');
    }

    // Init Stretched Card
    if (typeof KTLayoutStretchedCard !== 'undefined') {
        KTLayoutStretchedCard.init('kt_page_stretched_card');
    }

    // Init Code Highlighter & Preview Blocks(used to demonstrate the theme features)
    if (typeof KTLayoutExamples !== 'undefined') {
        KTLayoutExamples.init();
    }

    // Init Demo Selection Panel
    if (typeof KTLayoutDemoPanel !== 'undefined') {
        KTLayoutDemoPanel.init('kt_demo_panel');
    }

    // Init Chat App(quick modal chat)
    if (typeof KTLayoutChat !== 'undefined') {
        KTLayoutChat.init('kt_chat_modal');
    }

    // Init Quick Actions Offcanvas Panel
    if (typeof KTLayoutQuickActions !== 'undefined') {
        KTLayoutQuickActions.init('kt_quick_actions');
    }

    // Init Quick Notifications Offcanvas Panel
    if (typeof KTLayoutQuickNotifications !== 'undefined') {
        KTLayoutQuickNotifications.init('kt_quick_notifications');
    }

    // Init Quick User Panel
    if (typeof KTLayoutQuickUser !== 'undefined') {
        KTLayoutQuickUser.init('kt_quick_user');
    }

    // Init Search Dropdown For Tablet & Mobile Mode
    if (typeof KTLayoutSearch !== 'undefined') {
        KTLayoutSearch().init('kt_quick_search_dropdown');
    }
});
