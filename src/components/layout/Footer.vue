<template>
  <div class="footer">
    <div class="container">
      <div class="flex flex-wrap justify-between">
        <div class="footer-col">
          <h4>Pro Seal</h4>
          <ul>
            <li>Về Chúng Tôi</li>
            <li>Chính Sách Công Ty</li>
          </ul>
        </div>
        <div class="footer-col" style="width: 40%">
          <h4>Thông Tin Liên Hệ</h4>
          <ul>
            <li>
              <fa icon="phone" style="color: #f9f9f9" />
              +84 907 315 176 (Mr. Bao)
            </li>
            <li>
              <fa icon="envelope" style="color: #f9f9f9" />
              baodu1994@gmail.com
            </li>
            <li>
              <fa :icon="['fas', 'compass']" style="color: #f9f9f9" /> 828 Sư
              Vạn Hạnh, phường 12, quận 10, HCMC
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Theo Dõi Tại</h4>
          <div class="social-links">
            <a><fa :icon="['fab', 'facebook']" style="color: #304d30" /></a>
            <a><fa :icon="['fab', 'twitter']" style="color: #304d30" /></a>
            <a> <fa :icon="['fab', 'instagram']" style="color: #304d30" /></a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="text-center !mt-4">
        <hr class="!pt-2 !mx-4" />
        <p>Copyright © 2024 Pro Seal. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #f9f9f9;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}

.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.row p {
  color: #bbbbbb;
}

.footer {
  background-color: #304d30;
  padding: 20px 0;
}
.footer-col {
  width: 30%;
  padding: 0 15px;
}

.footer-col h4 {
  font-size: 30px;
  margin-bottom: 30px;
  position: relative;
  font-weight: 500;
}
.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #f7f9fb;
  height: 3px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 90px;
  box-shadow: 0 0 5px #ffffff;
}

.footer-col ul li {
  font-size: 16px;
  color: #bbbbbb;
  display: block;
  transition: all 0.5s ease;
}
.footer-col ul li:hover {
  color: #f9f9f9;
  padding-left: 8px;
}
.footer-col ul li a {
  font-size: 16px;
  color: #bbbbbb;
  display: block;
}
.footer-col ul li a:hover {
  color: #f9f9f9;
  padding-left: 6px;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}

.footer-col .social-links a {
  font-size: 1.5rem;
  color: #304d30;
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 15px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  transition: all 0.6s ease;
}
.footer-col .social-links a:hover {
  color: #494949;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px #ffffffd1;
}

/* RESPONSIVE */
@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}

@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}
</style>
