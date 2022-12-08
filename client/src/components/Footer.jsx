import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* HTML
<!-- Footer --> */}
            <footer class="page-footer font-small special-color-dark pt-4">

                {/* <!-- Footer Elements --> */}
                <div class="container">

                    {/* <!--Grid row--> */}
                    <div class="row">

                        {/* <!--Grid column--> */}
                        <div class="col-md-6 mb-4">

                            {/* <!-- Form --> */}
                            <form class="form-inline">
                                <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                                    aria-label="Search" />
                                <i class="fas fa-search" aria-hidden="true"></i>
                            </form>
                            {/* <!-- Form --> */}

                        </div>
                        {/* <!--Grid column--> */}

                        {/* <!--Grid column--> */}
                        <div class="col-md-6 mb-4">

                            <form class="input-group">
                                <input type="text" class="form-control form-control-sm" placeholder="Your email"
                                    aria-label="Your email" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <button class="btn btn-sm btn-outline-white btn-light my-0" type="button">Sign up</button>
                                </div>
                            </form>

                        </div>
                        {/* <!--Grid column--> */}

                    </div>
                    {/* <!--Grid row--> */}

                </div>
                {/* <!-- Footer Elements --> */}

                {/* <!-- Copyright --> */}
                <div class="footer-copyright text-center py-3">2022:
                    <a href="https://wwww.github.com/agosmou"> github.com/agosmou</a>
                    {/* <!-- Github --> */}
                    <a
                        class="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.github.com/agosmou"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i class="fab fa-github"></i
                    ></a>
                </div>
                {/* <!-- Copyright --> */}

            </footer>
            {/* <!-- Footer --> */}
        </div>
    )
}

export default Footer