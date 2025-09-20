import { motion, useInView } from "framer-motion";
import { ReactNode, useRef, useState, useEffect } from "react";

export const FadeUpAnimation = ({ children, duration = 0.5 }: { children: ReactNode; duration?: number }) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: duration }}
        >
            {children}
        </motion.div>
    );
};

export const FadeDownAnimation = ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export const FadeInAnimation = ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export const FadeLeftAnimation = ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export const FadeRightAnimation = ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export const ZoomInAnimation = ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export const ZoomOutAnimation = ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 2 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export const DissolveAnimation = ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};
