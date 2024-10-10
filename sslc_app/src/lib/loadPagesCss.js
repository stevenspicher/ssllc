

export const  useEffect_loadPagesCss = (useEffect) => {
    useEffect(() => {
        document.body.classList.add("pages");

        return () => {
            document.body.classList.remove("pages");
        };
    }, []);
}