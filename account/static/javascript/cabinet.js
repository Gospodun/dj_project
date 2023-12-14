const breakpoint = window.matchMedia("(max-width: 1150px)");

const breakpointChecker = () => {
    if (breakpoint.matches) {
        document.querySelector('#autoExpand').textContent = "Автопродление";
    } else {
        document.querySelector('#autoExpand').textContent = "Включить автопродление";
    }
};

breakpoint.addEventListener("change", breakpointChecker);
breakpointChecker();