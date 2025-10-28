<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    
<head>
        
        <meta charset="utf-8" />
        <title>Qroom | @yield('title')</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{asset('skote/assets/images/favicon.ico')}}">

        @include('layouts.style')

        @livewireStyles

    </head>

    <body data-sidebar="light">

    <!-- <body data-layout="horizontal" data-topbar="dark"> -->

        <!-- Begin page -->
        <div id="layout-wrapper">

            
                <header id="page-topbar">
                    @include('layouts.navbar')
                </header>

                <!-- ========== Left Sidebar Start ========== -->
                <div class="vertical-menu">
                    @include('layouts.sidebar')
                </div>
                <!-- Left Sidebar End -->

                

                <!-- ============================================================== -->
                <!-- Start right Content here -->
                <!-- ============================================================== -->
                <div class="main-content">
                    @yield('content')
                    @include('layouts.footer')
                </div>

        </div>
        <!-- END layout-wrapper -->


      @include('layouts.script')

      @livewireScripts

    </body>

</html>

