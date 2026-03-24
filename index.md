---
layout: cv
title: Eugene de Beste - Curriculum Vitae
---
# Eugene de Beste
<p id="subtitle"><u>Infrastructure Operations Manager (Secondment) | Platform & Infrastructure Engineering</u></p>

<div class="webaddress">
<a href="mailto:eugene@debeste.co.za" aria-label="Email Address"><i class="fa fa-envelope" aria-hidden="true"></i>eugene@debeste.co.za</a>
<a href="https://eugene.debeste.co.za" aria-label="Personal Website"><i class="fa fa-globe" aria-hidden="true"></i>eugene.debeste.co.za</a>
<a href="https://www.linkedin.com/in/eugene-de-beste/" aria-label="LinkedIn Profile"><i class="fa fa-linkedin" aria-hidden="true"></i>linkedin.com/in/eugene-de-beste</a>
<a href="https://github.com/Banshee1221" aria-label="GitHub Profile"><i class="fa fa-github" aria-hidden="true"></i>github.com/Banshee1221</a>
<span><i class="fa fa-map-marker" aria-hidden="true"></i>Cape Town, South Africa</span>
</div>

<div class="quote-block">
  <p class="quote-text">"The right man in the wrong place can make all the difference in the world."</p>
  <p id="quoted">- G-man, Half-Life 2.</p>
</div>

<section class="cv-item cv-item--section-inline">
  <div class="cv-item__rail"><h2>Professional Summary</h2></div>
  <div class="cv-item__content">
    <p>Platform and infrastructure engineer specialising in <strong>OpenStack</strong> private cloud, <strong>Kubernetes/GitOps</strong>, and <strong>GPU cloud platforms</strong>, with experience spanning hands-on systems engineering and infrastructure operations leadership. Built deployment, automation, and observability tooling across multi-region environments; led customer migrations and workload troubleshooting; and diagnosed low-level virtualisation, firmware, and hardware issues, translating findings into proposed platform fixes and operational improvements.</p>
  </div>
</section>

<section class="cv-item cv-item--section-inline">
  <div class="cv-item__rail"><h2>Core Skills / Technologies</h2></div>
  <div class="cv-item__content">
    <ul>
      <li><strong>Cloud / Platform:</strong> OpenStack, Kolla-Ansible, Kubernetes, Kubespray, Cilium, Argo CD, ApplicationSet, Helm, Ceph, MAAS, NetBox, PowerDNS</li>
      <li><strong>Automation / IaC / Tooling:</strong> Ansible, Python, GitOps, Windmill, Packer, Terraform</li>
      <li><strong>Systems / Virtualisation:</strong> Linux, QEMU, KVM, libvirt, OVMF/EDK2, Open vSwitch, SR-IOV</li>
      <li><strong>Networking (integration):</strong> VLANs, VRRP, MetalLB, BGP, L2/L3 fabrics</li>
      <li><strong>Observability / Ops:</strong> Prometheus, Grafana, incident response, runbooks, operational tooling, SRE</li>
      <li><strong>GPU / HPC:</strong> H100, H200, B200, GH200, GPU virtualisation, InfiniBand, RoCEv2, GPU Direct RDMA</li>
      <li><strong>AI-assisted engineering:</strong> Anthropic Claude / Claude Code, OpenAI ChatGPT Codex, Cursor</li>
    </ul>
  </div>
</section>

## Professional Experience

<section class="cv-item cv-item--experience">
  <div class="cv-item__rail"><h3>NexGen Cloud</h3></div>
  <div class="cv-item__content">
    <div class="entry-row entry-row--role">
      <div class="entry-main"><strong>Infrastructure Operations Manager (Secondment)</strong></div>
      <div class="entry-meta" style="margin-right: -0.2em;">Mar 2026 - Current</div>
    </div>
    <div class="entry-row entry-row--role">
      <div class="entry-main"><strong>Head of Infrastructure Operations (Secondment)</strong></div>
      <div class="entry-meta">Jul 2025 - Feb 2026</div>
    </div>
    <div class="entry-row entry-row--role">
      <div class="entry-main"><strong>Senior Infrastructure Engineer</strong></div>
      <div class="entry-meta">Jan 2024 - Jun 2025</div>
    </div>
    <p class="cv-note"><em>Title changed during internal leadership restructuring; scope remained unchanged.</em></p>
    <ul>
      <li>Standardised OpenStack region deployment for GPU cloud by building custom Ansible and Python configuration tooling around <strong>Kolla-Ansible</strong>, supporting major platform releases and accelerating node and region bring-up across multiple data centres.</li>
      <li>Designed and implemented the multi-region <strong>Kubernetes</strong> platform for internal services, using Kubespray, <strong>Argo CD / ApplicationSet</strong> GitOps, and Cilium across both BGP/L3 and L2-only environments, integrating with existing VRRP and MetalLB load-balancing patterns.</li>
      <li>Developed a plugin-based <strong>NetBox sync tool</strong> to reconcile inventory and DNS state across NetBox, MAAS, and PowerDNS, improving consistency in infrastructure source-of-truth workflows.</li>
      <li>Built and productionised <strong>Windmill</strong> as an audited self-service automation platform, delivering <strong>10,000+ lines of Python</strong> libraries and workflows that enabled self-service remediation and troubleshooting for operations teams.</li>
      <li>Engineered targeted hypervisor-side Python integrations around Nova/libvirt to isolate hardware faults, and co-led <strong>SR-IOV implementation</strong> for high-performance instance networking.</li>
      <li>Planned and executed largely automated customer migrations across <strong>300+ virtual machines</strong>, providing direct workload troubleshooting and escalations during onboarding.</li>
      <li>Diagnosed firmware and kernel bottlenecks behind GPU VM boot delays and proposed changes projected to reduce wait times by <strong>80%+</strong> in affected cases.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--experience">
  <div class="cv-item__rail"><h3>CSIR / CHPC</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main"><strong>Senior Cloud and HPC Technologist II</strong></div>
      <div class="entry-meta">2020 - 2024</div>
    </div>
    <ul>
      <li>Led the OpenStack Research Cloud and ACE Lab as R&D platforms for cloud/HPC experimentation, while also contributing to Sebowa production-cloud operations serving hundreds of researchers.</li>
      <li>Deployed the CHPC Pretoria region for Sebowa and trained the local team on OpenStack operations, support, and policy alignment.</li>
      <li>Architected and operated multi-petabyte <strong>Ceph storage</strong> for HPC workloads, building monitoring and inventory systems that improved operational visibility.</li>
      <li>Co-led the South African Student Cluster Competition programme, mentoring teams and developing training material for cohorts progressing to the ISC Student Cluster Challenge.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--experience">
  <div class="cv-item__rail"><h3>UCT / ILIFU</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main"><strong>External Consultant</strong></div>
      <div class="entry-meta">2018 - 2020</div>
    </div>
    <ul>
      <li>Planned and delivered a private OpenStack cloud for astronomy and bioinformatics with multi-petabyte Ceph storage.</li>
      <li>Prototyped the platform on test hardware, then moved it into production with OpenStack, Ceph, and Manila evaluation for file services.</li>
      <li>Supported handover and ongoing technical guidance during deployment, including cloud and storage troubleshooting.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--experience">
  <div class="cv-item__rail"><h3>SANBI / UWC</h3></div>
  <div class="cv-item__content">
    <div class="entry-row">
      <div class="entry-main"><strong>Systems Developer</strong></div>
      <div class="entry-meta">2017 - 2020</div>
    </div>
    <ul>
      <li>Trained and supported student teams for the CHPC Student Cluster Competition, redesigning delivery for fully remote operation during the pandemic.</li>
      <li>Migrated in-house VM management onto OpenStack and supported HISP, NICD, and UWC HPC deployments across cloud and bare-metal environments.</li>
      <li>Automated bare-metal and cloud builds with <strong>MAAS</strong>, PXE, Ansible, and Terraform, introducing FreeIPA, monitoring, and change-management practices.</li>
      <li>Supported Ceph storage, networking, and helpdesk operations across research and IT teams.</li>
    </ul>
  </div>
</section>


## Selected Projects

<section class="cv-item cv-item--project">
  <div class="cv-item__rail"><h3>African Pathogen Archive</h3></div>
  <div class="cv-item__content">
    <div class="cv-item__meta">CHPC</div>
    <ul>
      <li>Helped secure the CHPC and SANBI MoU and shaped the Infrastructure Automation Lead role.</li>
      <li>Built <strong>Flux CD</strong> automation for repeatable deployment across Kubernetes and OpenStack.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--project">
  <div class="cv-item__rail"><h3>HISP Deployment</h3></div>
  <div class="cv-item__content">
    <div class="cv-item__meta">CHPC</div>
    <ul>
      <li>Delivered <strong>Kolla-Ansible</strong> based OpenStack deployment support, including custom network and switching layout.</li>
      <li>Provided training and documentation to help the team operate the platform independently.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--project">
  <div class="cv-item__rail"><h3>Student Cluster Competition</h3></div>
  <div class="cv-item__content">
    <div class="cv-item__meta">CHPC</div>
    <ul>
      <li>Produced remote learning content and production material to move the competition online during COVID.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--project">
  <div class="cv-item__rail"><h3>UCT / SANBI / ILIFU</h3></div>
  <div class="cv-item__content">
    <div class="cv-item__meta">2018 - 2020</div>
    <ul>
      <li>Planned and prototyped the data-intensive <strong>OpenStack</strong> and <strong>Ceph</strong> research cloud that supported astronomy and bioinformatics workloads.</li>
      <li>Contributed to production delivery, Manila exploration, and second-tier storage and cloud support.</li>
    </ul>
  </div>
</section>

## Education

<section class="cv-item cv-item--education">
  <div class="cv-item__rail"><h3>Tertiary Education</h3></div>
  <div class="cv-item__content">
    <div class="cv-item__meta">2016 – 2019</div>
    <ul>
      <li>
        <strong>M.Sc. Bioinformatics</strong>
        <br>
        <em>South African National Bioinformatics Institute, University of the Western Cape</em>
        <div class="cv-item__details">Awarded <em>Cum Laude</em>.</div>
      </li>
    </ul>

    <div class="cv-item__meta">2015</div>
    <ul>
      <li>
        <strong>B.Sc. Hons Information Technology</strong>
        <br>
        <em>University of Cape Town</em>
        <div class="cv-item__details">
          Mini-thesis: <strong>de Beste, E.</strong>, Stewart, G. and Gain, J. (2015). <em>PyTeacher: Determining the Usefulness of Visual Learning for Computer Science.</em>
          <br>
          Awarded <em>Cum Laude</em>.
        </div>
      </li>
    </ul>

    <div class="cv-item__meta">2012 – 2014</div>
    <ul>
      <li>
        <strong>B.Sc. Computer Science</strong>
        <br>
        <em>University of the Western Cape</em>
        <div class="cv-item__details">Awarded <em>Cum Laude</em>.</div>
      </li>
    </ul>
  </div>
</section>

## Scholarly Impact & Recognition

<section class="cv-item cv-item--publication">
  <div class="cv-item__rail"><h3>Selected Publications</h3></div>
  <div class="cv-item__content">
    <div class="cv-item__meta">2019</div>
    <ul>
      <li><strong>de Beste, E.</strong> (2019). <em>"Enabling the processing of bioinformatics workflows where data is located through the use of cloud and container technologies"</em>. <a href="static/education/msc_thesis.pdf">Thesis</a></li>
    </ul>
    
    <div class="cv-item__meta">2018</div>
    <ul>
      <li>Ahmed, A.E., Mpangase, P.T., Panji, S., Baichoo, S., Souilmi, Y., Fadlelmola, F.M., Alghali, M., Aron, S., Bendou, H., <strong>de Beste, E.</strong> and Mbiyavanga, M. (2018). <em>"Organizing and running bioinformatics hackathons within Africa: The H3ABioNet cloud computing experience"</em>. <em>AAS Open Research</em>, 1.</li>
    </ul>
    
    <div class="cv-item__meta">2018</div>
    <ul>
      <li>Baichoo, S., Souilmi, Y., Panji, S. et al. (2018). <em>"Developing reproducible bioinformatics analysis workflows for heterogeneous computing environments to support African genomics."</em>. <em>BMC Bioinformatics</em> 19, 457.</li>
    </ul>
    
    <div class="cv-item__meta">2019</div>
    <ul>
      <li><strong>de Beste, E.</strong>, Christoffels, A., van Heusden, P. (2019). <em>"Leveraging Open Source Technologies to Rapidly Deploy Infrastructure with Minimum Human Capacity"</em>. <em>Centre for High Performance Computing Annual Conference</em>.</li>
    </ul>
  </div>
</section>

<section class="cv-item cv-item--award">
  <div class="cv-item__rail"><h3>Honours & Awards</h3></div>
  <div class="cv-item__content">
    <div class="cv-item__meta">2014</div>
    <ul>
      <li><strong>First Place Overall Prize for the ISC'14 Student Cluster Challenge</strong> – <em>International Supercomputing Conference, Leipzig, Germany</em></li>
    </ul>
    
    <div class="cv-item__meta">2013</div>
    <ul>
      <li><strong>First Place for the CHPC Student Cluster Competition 2013</strong> – <em>Centre for High Performance Computing, Council for Scientific and Industrial Research</em></li>
    </ul>
  </div>
</section>
