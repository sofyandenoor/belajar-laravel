!(function () {
    "use strict";
    if (window.sessionStorage) {
        var t = sessionStorage.getItem("is_visited");
        if (t)
            switch (t) {
                case "light-mode-switch":
                    document.documentElement.removeAttribute("dir"),
                        "skote/assets/css/bootstrap.min.css" !=
                            document
                                .getElementById("bootstrap-style")
                                .getAttribute("href") &&
                            document
                                .getElementById("bootstrap-style")
                                .setAttribute(
                                    "href",
                                    "skote/assets/css/bootstrap.min.css"
                                ),
                        "skote/assets/css/app.min.css" !=
                            document
                                .getElementById("app-style")
                                .getAttribute("href") &&
                            document
                                .getElementById("app-style")
                                .setAttribute("href", "skote/assets/css/app.min.css"),
                        document.documentElement.setAttribute(
                            "data-bs-theme",
                            "light"
                        );
                    break;
                case "dark-mode-switch":
                    document.documentElement.removeAttribute("dir"),
                        "skote/assets/css/bootstrap.min.css" !=
                            document
                                .getElementById("bootstrap-style")
                                .getAttribute("href") &&
                            document
                                .getElementById("bootstrap-style")
                                .setAttribute(
                                    "href",
                                    "skote/assets/css/bootstrap.min.css"
                                ),
                        "skote/assets/css/app.min.css" !=
                            document
                                .getElementById("app-style")
                                .getAttribute("href") &&
                            document
                                .getElementById("app-style")
                                .setAttribute("href", "skote/assets/css/app.min.css"),
                        document.documentElement.setAttribute(
                            "data-bs-theme",
                            "dark"
                        );
                    break;
                case "rtl-mode-switch":
                    "skote/assets/css/bootstrap-rtl.min.css" !=
                        document
                            .getElementById("bootstrap-style")
                            .getAttribute("href") &&
                        document
                            .getElementById("bootstrap-style")
                            .setAttribute(
                                "href",
                                "skote/assets/css/bootstrap-rtl.min.css"
                            ),
                        "skote/assets/css/app-rtl.min.css" !=
                            document
                                .getElementById("app-style")
                                .getAttribute("href") &&
                            document
                                .getElementById("app-style")
                                .setAttribute(
                                    "href",
                                    "skote/assets/css/app-rtl.min.css"
                                ),
                        document.documentElement.setAttribute("dir", "rtl"),
                        document.documentElement.setAttribute(
                            "data-bs-theme",
                            "light"
                        );
                    break;
                case "dark-rtl-mode-switch":
                    "skote/assets/css/bootstrap-rtl.min.css" !=
                        document
                            .getElementById("bootstrap-style")
                            .getAttribute("href") &&
                        document
                            .getElementById("bootstrap-style")
                            .setAttribute(
                                "href",
                                "skote/assets/css/bootstrap-rtl.min.css"
                            ),
                        "skote/assets/css/app-rtl.min.css" !=
                            document
                                .getElementById("app-style")
                                .getAttribute("href") &&
                            document
                                .getElementById("app-style")
                                .setAttribute(
                                    "href",
                                    "skote/assets/css/app-rtl.min.css"
                                ),
                        document.documentElement.setAttribute("dir", "rtl"),
                        document.documentElement.setAttribute(
                            "data-bs-theme",
                            "dark"
                        );
                    break;
                default:
                    console.log("Something wrong with the layout mode.");
            }
    }
})(window.jQuery);
