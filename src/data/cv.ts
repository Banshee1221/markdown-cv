export type HeaderLink = {
  label: string;
  href?: string;
  value: string;
  kind: 'email' | 'website' | 'linkedin' | 'github' | 'location';
};

export type SkillGroup = {
  label: string;
  items: string;
};

export type Role = {
  title: string;
  meta: string;
};

export type ExperienceItem = {
  rail: string;
  roles: Role[];
  note?: string;
  intro?: string;
  bullets: string[];
};

export type CompactItem = {
  rail: string;
  meta: string;
  bullets?: string[];
  lead?: string;
  details?: string[];
};

export type ImpactEntry = {
  html: string;
  meta: string;
};

export const profile = {
  name: 'Eugene de Beste',
  title: 'Infrastructure Operations Manager (Secondment) | Platform & Infrastructure Engineering',
  quote: '“The right man in the wrong place can make all the difference in the world.”',
  attribution: '— G-man, Half-Life 2.',
  links: [
    {
      label: 'Email',
      href: 'mailto:eugene@debeste.co.za',
      value: 'eugene@debeste.co.za',
      kind: 'email'
    },
    {
      label: 'Web',
      href: 'https://eugene.debeste.co.za',
      value: 'eugene.debeste.co.za',
      kind: 'website'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/eugene-de-beste/',
      value: 'linkedin.com/in/eugene-de-beste',
      kind: 'linkedin'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Banshee1221',
      value: 'github.com/Banshee1221',
      kind: 'github'
    },
    {
      label: 'Base',
      value: 'Cape Town, South Africa',
      kind: 'location'
    }
  ] satisfies HeaderLink[]
};

export const summary = [
  'Platform and infrastructure engineer specialising in <strong>OpenStack</strong> private cloud, <strong>Kubernetes/GitOps</strong>, and <strong>GPU cloud platforms</strong>, with experience spanning hands-on systems engineering and infrastructure operations leadership.',
  'Built deployment, automation, and observability tooling across multi-region environments; led customer migrations and workload troubleshooting; and diagnosed low-level virtualisation, firmware, and hardware issues, translating findings into proposed platform fixes and operational improvements.'
];

export const skills: SkillGroup[] = [
  {
    label: 'Cloud / Platform',
    items: 'OpenStack, Kolla-Ansible, Kubernetes, Kubespray, Cilium, Argo CD, ApplicationSet, Helm, Ceph, MAAS, NetBox, PowerDNS'
  },
  {
    label: 'Automation / IaC / Tooling',
    items: 'Ansible, Python, GitOps, Windmill, Packer, Terraform'
  },
  {
    label: 'Systems / Virtualisation',
    items: 'Linux, QEMU, KVM, libvirt, OVMF/EDK2, Open vSwitch, SR-IOV'
  },
  {
    label: 'Networking / Integration',
    items: 'VLANs, VRRP, MetalLB, BGP, L2/L3 fabrics'
  },
  {
    label: 'Observability / Ops',
    items: 'Prometheus, Grafana, incident response, runbooks, operational tooling, SRE'
  },
  {
    label: 'GPU / HPC',
    items: 'H100, H200, B200, GH200, GPU virtualisation, InfiniBand, RoCEv2, GPU Direct RDMA'
  },
  {
    label: 'AI-assisted engineering',
    items: 'Anthropic Claude / Claude Code, OpenAI ChatGPT Codex, Cursor'
  }
];

export const experience: ExperienceItem[] = [
  {
    rail: 'NexGen Cloud',
    roles: [
      { title: 'Infrastructure Operations Manager (Secondment)', meta: 'Mar 2026 - Current' },
      { title: 'Head of Infrastructure Operations (Secondment)', meta: 'Jul 2025 - Feb 2026' },
      { title: 'Senior Infrastructure Engineer', meta: 'Jan 2024 - Jun 2025' }
    ],
    note: 'Title updated during internal restructuring; scope unchanged.',
    bullets: [
      'Standardised OpenStack region deployment for GPU cloud by building custom Ansible and Python configuration tooling around <strong>Kolla-Ansible</strong>, supporting major platform releases and accelerating node and region bring-up across multiple data centres.',
      'Designed and implemented the multi-region <strong>Kubernetes</strong> platform for internal services, using Kubespray, <strong>Argo CD / ApplicationSet</strong> GitOps, and Cilium across both BGP/L3 and L2-only environments, integrating with existing VRRP and MetalLB load-balancing patterns.',
      'Developed a plugin-based <strong>NetBox sync tool</strong> to reconcile inventory and DNS state across NetBox, MAAS, and PowerDNS, improving consistency in infrastructure source-of-truth workflows.',
      'Built and productionised <strong>Windmill</strong> as an audited self-service automation platform, delivering <strong>10,000+ lines of Python</strong> libraries and workflows that enabled self-service remediation and troubleshooting for operations teams.',
      'Engineered targeted hypervisor-side Python integrations around Nova/libvirt to isolate hardware faults, and co-led <strong>SR-IOV implementation</strong> for high-performance instance networking.',
      'Planned and executed largely automated customer migrations across <strong>300+ virtual machines</strong>, providing direct workload troubleshooting and escalations during onboarding.',
      'Diagnosed firmware and kernel bottlenecks behind GPU VM boot delays and proposed changes projected to reduce wait times by <strong>80%+</strong> in affected cases.'
    ]
  },
  {
    rail: 'CSIR / CHPC',
    roles: [{ title: 'Senior Cloud and HPC Technologist II', meta: '2020 - 2024' }],
    bullets: [
      'Led the OpenStack Research Cloud and ACE Lab as R&D platforms for cloud/HPC experimentation, while also contributing to Sebowa production-cloud operations serving hundreds of researchers.',
      'Deployed the CHPC Pretoria region for Sebowa and trained the local team on OpenStack operations, support, and policy alignment.',
      'Architected and operated multi-petabyte <strong>Ceph storage</strong> for HPC workloads, building monitoring and inventory systems that improved operational visibility.',
      'Co-led the South African Student Cluster Competition programme, mentoring teams and developing training material for cohorts progressing to the ISC Student Cluster Challenge.'
    ]
  },
  {
    rail: 'UCT / ILIFU',
    roles: [{ title: 'External Consultant', meta: '2018 - 2020' }],
    bullets: [
      'Planned and delivered a private OpenStack cloud for astronomy and bioinformatics with multi-petabyte Ceph storage.',
      'Prototyped the platform on test hardware, then moved it into production with OpenStack, Ceph, and Manila evaluation for file services.',
      'Supported handover and ongoing technical guidance during deployment, including cloud and storage troubleshooting.'
    ]
  },
  {
    rail: 'SANBI / UWC',
    roles: [{ title: 'Systems Developer', meta: '2017 - 2020' }],
    bullets: [
      'Trained and supported student teams for the CHPC Student Cluster Competition, redesigning delivery for fully remote operation during the pandemic.',
      'Migrated in-house VM management onto OpenStack and supported HISP, NICD, and UWC HPC deployments across cloud and bare-metal environments.',
      'Automated bare-metal and cloud builds with <strong>MAAS</strong>, PXE, Ansible, and Terraform, introducing FreeIPA, monitoring, and change-management practices.',
      'Supported Ceph storage, networking, and helpdesk operations across research and IT teams.'
    ]
  }
];

export const projects: CompactItem[] = [
  {
    rail: 'African Pathogen Archive',
    meta: 'CHPC / SANBI',
    bullets: [
      'Helped secure the CHPC and SANBI MoU and shaped the Infrastructure Automation Lead role.',
      'Built <strong>Flux CD</strong> automation for repeatable deployment across Kubernetes and OpenStack.'
    ]
  },
  {
    rail: 'HISP Deployment',
    meta: 'CHPC',
    bullets: [
      'Delivered <strong>Kolla-Ansible</strong> based OpenStack deployment support, including custom network and switching layout.',
      'Provided training and documentation to help the team operate the platform independently.'
    ]
  },
  {
    rail: 'Student Cluster Competition',
    meta: 'CHPC',
    bullets: ['Produced remote learning content and production material to move the competition online during COVID.']
  },
  {
    rail: 'Ilifu Project',
    meta: 'UCT / SANBI',
    bullets: [
      'Planned and prototyped the data-intensive <strong>OpenStack</strong> and <strong>Ceph</strong> research cloud that supported astronomy and bioinformatics workloads.',
      'Contributed to production delivery, Manila exploration, and second-tier storage and cloud support.'
    ]
  }
];

export const education: CompactItem[] = [
  {
    rail: 'SANBI / UWC',
    meta: '2016 - 2019',
    lead: '<strong>M.Sc. Bioinformatics</strong>',
    details: ['Awarded <em>Cum Laude</em>.']
  },
  {
    rail: 'University of Cape Town',
    meta: '2015',
    lead: '<strong>B.Sc. Hons Information Technology</strong>',
    details: [
      'Mini-thesis: <strong>de Beste, E.</strong>, Stewart, G. and Gain, J. (2015). <em>PyTeacher: Determining the Usefulness of Visual Learning for Computer Science.</em>',
      'Awarded <em>Cum Laude</em>.'
    ]
  },
  {
    rail: 'University of the Western Cape',
    meta: '2012 - 2014',
    lead: '<strong>B.Sc. Computer Science</strong>',
    details: ['Awarded <em>Cum Laude</em>.']
  }
];

export const scholarlyImpact = {
  publications: [
    {
      meta: '2025',
      html: '<strong>de Beste, E.</strong>, Johnston, B., Thorne, N., Cawood, M., Macleod, D. and Poole, J. (2025). <em>"A Retrospective on South Africa\'s Student Cluster Competition and its Model for Inclusive HPC Outreach and Training (2012-2020)"</em>. <em>12th SC Workshop on Best Practices for HPC Training and Education</em>, SC25.'
    },
    {
      meta: '2019',
      html: '<strong>de Beste, E.</strong> (2019). <em>"Enabling the processing of bioinformatics workflows where data is located through the use of cloud and container technologies"</em>. <a href="education/msc_thesis.pdf">Thesis</a>'
    },
    {
      meta: '2019',
      html: '<strong>de Beste, E.</strong>, Christoffels, A., van Heusden, P. (2019). <em>"Leveraging Open Source Technologies to Rapidly Deploy Infrastructure with Minimum Human Capacity"</em>. <em>Centre for High Performance Computing Annual Conference</em>.'
    },
    {
      meta: '2018',
      html: 'Baichoo, S., Souilmi, Y., Panji, S. et al. (2018). <em>"Developing reproducible bioinformatics analysis workflows for heterogeneous computing environments to support African genomics."</em>. <em>BMC Bioinformatics</em> 19, 457.'
    },
    {
      meta: '2018',
      html: 'Ahmed, A.E., Mpangase, P.T., Panji, S., Baichoo, S., Souilmi, Y., Fadlelmola, F.M., Alghali, M., Aron, S., Bendou, H., <strong>de Beste, E.</strong> and Mbiyavanga, M. (2018). <em>"Organizing and running bioinformatics hackathons within Africa: The H3ABioNet cloud computing experience"</em>. <em>AAS Open Research</em>, 1.'
    }
  ] satisfies ImpactEntry[],
  awards: [
    {
      meta: '2014',
      html: '<strong>First Place Overall Prize for the ISC\'14 Student Cluster Challenge</strong> – <em>International Supercomputing Conference, Leipzig, Germany</em>'
    },
    {
      meta: '2013',
      html: '<strong>First Place for the CHPC Student Cluster Competition 2013</strong> – <em>Centre for High Performance Computing, Council for Scientific and Industrial Research</em>'
    }
  ] satisfies ImpactEntry[]
};
