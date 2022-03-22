<template>
  <nav>
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/user/3">
      User
    </router-link> |
    <router-link to="/rank">
      Rank
    </router-link> |
    <router-link to="/track">
      Track
    </router-link>
  </nav>
  <router-view />
</template>
