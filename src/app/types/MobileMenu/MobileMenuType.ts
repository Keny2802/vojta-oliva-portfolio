import type { AllHTMLAttributes } from "react";

type MobileMenuType = AllHTMLAttributes<HTMLDivElement> & {
    isMobileMenuDisplay: boolean;
    setMobileMenuToDisplay: (type: boolean) => void;
    children?: React.ReactNode;
};

export default MobileMenuType;