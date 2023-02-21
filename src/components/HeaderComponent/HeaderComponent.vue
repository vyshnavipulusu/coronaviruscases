<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/" class="p-2">Corona Tracker</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/home">DashBoard</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script src="./HeaderComponent.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    padding-left: 5px;
}
</style>
